import styles from '@/styles/Forecast.module.css'
import Banner from '@/components/banner';
import Layout from '@/components/layout';

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