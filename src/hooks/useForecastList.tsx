import { useState, useEffect } from "react";

import { REQUEST_STATUS, delay } from "@/lib/utilities";
//import { getAllForecastsWithMetaData } from "@/lib/getForecasts";
import { ForecastPropsCollection } from "@/types/forecastTypes";

// custom hook for retrieving data
function useForecastList(authorId:string, delayTime: number = 1000 ) {
    const [forecastList, setforecastList] = useState<ForecastPropsCollection|null>(null);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    useEffect(() => {
        async function delayFunc() {
          try {
            await delay(delayTime);
            //throw "Had Error."

            const res = await fetch('/api/all-forecast-data');
            const data = await res.json() as ForecastPropsCollection;

            setforecastList(data);
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
        forecastList,
        requestStatus,
        error
      };
}

export default useForecastList;