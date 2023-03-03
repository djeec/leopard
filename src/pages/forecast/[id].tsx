import Banner from "@/components/banner";
import Forecast from "@/components/forecast";
import Layout from "@/components/layout";

import Head from 'next/head'
import { useRouter } from 'next/router'

const ForecastDetails = () => {
    const router = useRouter()
    const { id } = router.query
    let author: string = '100';
    
    return (
        <Layout>
            <Head>
                <title>Forecast</title>
            </Head>
            <Banner></Banner>
            <h1>Welcome to Forecast {id}</h1>
            <Forecast slug={id}></Forecast>
            
            
            
        </Layout>
    )
}

export default ForecastDetails;