import { ForecastProps } from "@/types/forecastTypes";
import Link from "next/link";

const ForecastListRow = ({data}: {data:ForecastProps})  => {
    const {metaData, slug} = data;
    {/* todo - add in a link to detail page for forecast */}

return (
    <tr>
        <td>{metaData.title}</td>
        <td>{metaData.id}</td>
        {/* <td><Link href={`/forecast/${encodeURIComponent(metaData.id)}`}>Go to pages/forecast/[id].js</Link></td> */}
        <td><Link href={{
            pathname: '/forecasts/[id]',
            query: {id: metaData.id}
        }}>Go to pages/forecast/[id].js</Link></td>
    </tr>
)

}


export default ForecastListRow;