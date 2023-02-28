import { ForecastProps } from "@/types/forecastTypes";
import useForecastList from "@/hooks/useForecastList";
import { REQUEST_STATUS } from "@/lib/utilities";
import ForecastListRow from "./forecastListRow";

{/* 
This component will render a list of forecasts
*/}

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
        <>
        <table>
            {forecastData?.forecasts?.map((data : ForecastProps) => (
                <ForecastListRow key={data.metaData.id} data={data}></ForecastListRow>
                
            ))}
        </table>
        </>
    )
}

export default ForcastList;