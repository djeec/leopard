import { useState, useEffect } from "react";

import { REQUEST_STATUS, delay } from "@/lib/utilities";
import { ForecastData } from "@/types/forecastTypes";

// custom hook for retrieving data
function useForecast(authorId:string, slug:string, delayTime: number = 1000 ) {
    const [forecastData, setForecastData] = useState<ForecastData|null>(null);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    useEffect(() => {
        async function delayFunc() {
          try {
            await delay(delayTime);
            //throw "Had Error."

            //const allForecastsData = await getAllForecastsWithMetaData(authorId);
            const res = await fetch('/api/forecast-data');
            const data = await res.json() as ForecastData;

            setForecastData(data);
            setRequestStatus(REQUEST_STATUS.SUCCESS);
          } catch (e) {            
            setRequestStatus(REQUEST_STATUS.FAILURE);

            let message = 'Unknown error';
            if (e instanceof Error) message = e.message;

            setError(message);
          }
        }
        delayFunc();
      }, []);

      return {
        forecastData,
        requestStatus,
        error
      };
}

export default useForecast;