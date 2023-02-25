import Banner from "@/components/banner";
import Layout from "@/components/layout";
import Head from "next/head";

import {AuthorForcastCollection, ForecastProps} from '@/types/forecastTypes';
import { GetStaticProps } from 'next'

import {getAllForecastsWithMetaData} from '@/lib/getForecasts';
import ForcastList from "@/components/ForecastList";

// export async function getStaticProps() {
//     const allForecastsData = await getAllForecastsWithMetaData('100');

//     console.log('in getstaticprops')
//     console.log(allForecastsData)
//     return {
//         props: {
//             forecasts: allForecastsData,
//             author : '100'
//         },
//     };
// }

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