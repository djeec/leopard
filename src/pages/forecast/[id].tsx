import Forecast from "@/components/forecast";
import Layout from "@/components/layout";

import Head from 'next/head'
import { useRouter } from 'next/router'

const ForecastDetailsPage = () => {
    const router = useRouter()
    const id = router.query['id'] as string;
    
    return (
        <Layout>
            <Head>
                <title>Forecast</title>
            </Head>
            <h1>Welcome to Forecast {id}</h1>
            <Forecast slug={id}></Forecast>
        </Layout>
    )
}

export default ForecastDetailsPage;