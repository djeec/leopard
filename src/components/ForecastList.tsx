import { ForecastProps } from "@/types/forecastTypes";
import useForecastList from "@/hooks/useForecastList";
import { REQUEST_STATUS } from "@/lib/utilities";

const ForcastList = () => {
    const {
        forecastData,
        requestStatus,
        error
    } = useForecastList('100', 2000);

    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
          <div className="text-danger">
            ERROR: <b>loading Forecast Data Failed {error}</b>
          </div>
        );
    }

    if (requestStatus === REQUEST_STATUS.LOADING) return <div>Loading...</div>

    if (requestStatus === REQUEST_STATUS.SUCCESS) { 
        if (!forecastData) {
             return <div>No forecastsss!</div>
            }
        }

    return (

    <ul>
                {forecastData?.forecasts.map((data : ForecastProps) => (
                    <li>
                    <h3>{data.metaData.title}</h3>
                    <p>{data.metaData.id}</p>
                    </li>
                ))}
            </ul>
    )
}

export default ForcastList;