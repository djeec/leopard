import { ForecastProps } from "@/types/forecastTypes";
import useGetForecastList from "@/hooks/useGetForecastList";
import { REQUEST_STATUS } from "@/pages/api/utilities";
import ForecastListRow from "./forecastListRow";

{/* 
This component will render a list of forecasts
*/}

const ForcastList = ({authorId}:{authorId:string}) => {
    const {
        forecastList,
        requestStatus,
        error
    } = useGetForecastList(authorId, 2000);

    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
          <div className="text-danger">
            ERROR: <b>loading Forecast Data Failed {error}</b>
          </div>
        );
    }

    if (requestStatus === REQUEST_STATUS.LOADING) return <div>Loading...</div>

    if (requestStatus === REQUEST_STATUS.SUCCESS) { 
        if (!forecastList) {
             return <div>No forecastsss!</div>
            }
        }

    return (
        <>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Id</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {forecastList?.forecasts?.map((data : ForecastProps) => (
                    <ForecastListRow key={data.metaData.id as string} data={data}></ForecastListRow>
                    
                ))}
            </tbody>
        </table>
        </>
    )
}

export default ForcastList;