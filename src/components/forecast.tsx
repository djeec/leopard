import styles from '@/styles/Forecast.module.css'
import Banner from './banner';
import Layout from './layout';

const Forecast = () => {
    return (
        <Layout>
            <Banner></Banner>
            <header>
                Forecast
            </header>
        </Layout>
    )
}

export default Forecast;