import Layout from "@/components/layout";
import { ForecastData } from "@/types/forecastTypes";
import Head from "next/head";
import { useState } from "react";

const CreateForecastPage = () => {
    let date: string = new Date().toUTCString();

    // const emptyForecast : ForecastData =
    // {
    //     content: "",
    //     forecastProps: {
    //         slug: '0',
    //         metaData: {
    //             id: '0',
    //             author: '100',
    //             timestamp: date,
    //             title: "",
    //             tags: []
    //         }
    //     },
    //     html: ""
    // }
    const emptyForecast = {
        authorId: '100',
        title: "",
        content: "",
        tags: ""
    }

    const [newForecast, setNewForecast] = useState(emptyForecast);

    return (
        <Layout>
            <Head>
                <title>Forecaster - Create a Forecast</title>
            </Head>
            <h1>Create Forecast</h1>

            <div className="row ">
                <span className="col-5 p-3 border border-info rounded info-box">
                    <h3>Making a good forecast</h3>
                    <p>Add a nice description about all the criteria</p>

                </span>
            </div>
        
            <div className="row">
            <span className="col-5 p-3 mt-2 border border-info bg-white">
                <strong>Title</strong>
                <p>A title should be the ultimate summary of your forecast</p>
                <input 
                    id="title"
                    type="text"
                    value={newForecast.title}
                    onChange={(e)=>{setNewForecast({...newForecast, title: e.target.value})}}
                    placeholder="Enter new title"
                    className="w-100"
                    >
                </input>
                </span>
            </div>
            <div className="row">
                <div col-5>
                    <input 
                        id="tags"
                        type="text"
                        value={newForecast.tags}
                        onChange={(e)=>{setNewForecast({...newForecast, tags: e.target.value})}}
                        placeholder="Enter up to 5 tags"
                        >
                    </input>
                </div>
            </div>
        </Layout>
        
    )
} 

export default CreateForecastPage;