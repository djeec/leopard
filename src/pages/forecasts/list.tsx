import Banner from "@/components/banner";
import Layout from "@/components/layout";
import Head from "next/head";

import ForcastList from "@/components/forecastList";

// todo - retrieve author from sign-in data
// react context

//const ListForecasts = ({ forecasts, author}: AuthorForecastCollection) => {
const ListForecasts = () => {    
    let author: string = '100';
    return (
        <Layout>
            <Head>
                <title>Forecaster - List my Forecasts</title>
            </Head>
            <Banner></Banner>
            <h1>List Forecast for author {author}</h1>
            <ForcastList authorId={author}></ForcastList>
        </Layout>
    )
}

export default ListForecasts;