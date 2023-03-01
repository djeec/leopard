import Banner from "@/components/banner";
import Layout from "@/components/layout";
import Head from 'next/head'

import { useRouter } from 'next/router'

const Forecast = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <Layout>
            <Head>
                <title>Forecast</title>
            </Head>
            <Banner></Banner>
            <h1>Welcome to Forecast {id}</h1>
            
            
            
        </Layout>
    )
}

export default Forecast;