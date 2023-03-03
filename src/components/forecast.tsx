import styles from '@/styles/Forecast.module.css'

import useForecast from "@/hooks/useForecast";
import { REQUEST_STATUS } from '@/lib/utilities';

const Forecast = ({slug}:{slug:string}) => {
    const {
        forecastData,
        requestStatus,
        error
    } = useForecast('100', slug, 2000);

    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
          <div className="text-danger">
            ERROR: <b>loading Forecast Data Failed {error}</b>
          </div>
        );
    }

    if (requestStatus === REQUEST_STATUS.LOADING) return <div>Loading...</div>

    return (
        <>
        <h1>{forecastData.forecastProps.metaData['title']}</h1>
        <div dangerouslySetInnerHTML={{ __html: forecastData.html }} />
        </>
        
    )
}

export default Forecast;