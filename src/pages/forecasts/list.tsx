import Banner from "@/components/banner";
import Layout from "@/components/layout";
import Head from "next/head";

import {AuthorForcastCollection, ForecastProps} from '@/types/forecastTypes';
import ForcastList from "@/components/forecastList";

const ListForecasts = ({ forecasts, author}: AuthorForcastCollection) => {
    return (
        <Layout>
            <Head>
                <title>Forecaster - List my Forecasts</title>
            </Head>
            <Banner></Banner>
            <h1>List Forecast for author {author}</h1>
            <ForcastList></ForcastList>
            
        </Layout>
    )
}

export default ListForecasts;