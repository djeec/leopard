import { ForecastProps } from "@/types/forecastTypes";

const ForecastListRow = ({data}: {data:ForecastProps})  => {
    const {metaData, slug} = data;
    {/* todo - add in a link to detail page for forecast */}

return (
    <tr>
        <td>{metaData.title}</td>
        <td>{metaData.id}</td>
    </tr>
)

}


export default ForecastListRow;