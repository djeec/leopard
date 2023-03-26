import { useState, useEffect } from "react";

import { ForecastCreateData, ForecastData } from "@/types/forecastTypes";

// create/update forecast
function useRegisterForecast(authorId:string, forecast:ForecastCreateData) {
    

    useEffect(() => {
        // may need to get existing data
    }, [authorId, forecast]);

    const postForecast = async (forecast:ForecastCreateData) => {
        // todo - get id
        // todo - get author
        // todo - set date

        // await fetch(`/api/bids/${bid.houseId}`, {
        //     method: "POST",
        //     headers: {
        //       Accept: "application/json",
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(bid),
        //   });
    }

    const registerForecast = (forecast:ForecastCreateData) => {
        postForecast(forecast);
      };

    return {
        registerForecast
    };
}

export default useRegisterForecast;