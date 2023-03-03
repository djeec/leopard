import styles from '@/styles/Forecast.module.css'
import Banner from '@/components/banner';
import Layout from '@/components/layout';

import useForecast from "@/hooks/useForecast";

const Forecast = ({slug}:{slug:string}) => {
    const {
        forecastData,
        requestStatus,
        error
    } = useForecast('100', slug, 2000);

    if (!forecastData) return <div>Loading forecast...</div>

    return (
        <>
        <h1>{forecastData.forecastProps.metaData['title']}</h1>
        <div dangerouslySetInnerHTML={{ __html: forecastData.html }} />
        </>
        
    )
}

export default Forecast;