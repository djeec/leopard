import Banner from "@/components/banner";
import Layout from "@/components/layout";
import Head from "next/head";

import {AuthorForcastCollection, ForecastProps} from '@/types/forecastTypes';
import { GetStaticProps } from 'next'

import {getAllForecastsWithMetaData} from '@/lib/getForecasts';

export async function getStaticProps() {
    const allForecastsData = await getAllForecastsWithMetaData('100');

    console.log('in getstaticprops')
    console.log(allForecastsData)
    return {
        props: {
            forecasts: allForecastsData,
            author : '100'
        },
    };
}

const ListForecasts = ({ forecasts, author}: AuthorForcastCollection) => {
    return (
        <Layout>
        <Head>
            <title>Forecaster - List my Forecasts</title>
        </Head>
        <Banner></Banner>
        <h1>List Forecast for author {author}</h1>
        {!forecasts && <div>No forecasts!</div>}
        <ul>
            {forecasts.map((data : ForecastProps) => (
                <li>
                <h3>{data.metaData.title}</h3>
                <p>{data.metaData.id}</p>
                </li>
            ))}
    </ul>



        

        </Layout>
        
    )
}

export default ListForecasts;