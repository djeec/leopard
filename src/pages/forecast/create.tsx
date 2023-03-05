import Layout from "@/components/layout";
import { ForecastCreateData } from "@/types/forecastTypes";
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
    const emptyForecast : ForecastCreateData = {
        authorId: '100',
        title: "",
        content: "",
        html: "",
        currentTag: "",
        tags: []
    }

    const [newForecast, setNewForecast] = useState(emptyForecast);

    const onForecastSubmitClick = () => {
        useRegisterForecast(newForecast);
        setNewForecast(emptyForecast);
      };

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
                <span className="col-5 p-3 mt-2 border border-info bg-white">
                    <strong>Tags</strong>
                    <p>Tags are used for classification and queries</p>
                    <div className="border border-dark">
                        <span>{/* this is for rendered tags */}</span>
                        <input 
                            id="tags"
                            type="text"
                            value={newForecast.tags}
                            onChange={(e)=>{setNewForecast({...newForecast, currentTag: e.target.value})}}
                            placeholder="Enter up to 5 tags"
                            className="border-0"
                            >
                        </input>
                    </div>
                </span>
            </div>
            <div className="row">
                <span className="col-5 p-3 mt-2 border border-info bg-white">
                    <strong>Forecast</strong>
                    <p>Knowledge of a subject is demonstrated by being able to sysnthesize current information to predict future occurrences</p>
                    <textarea 
                        id="tags"
                        value={newForecast.content}
                        onChange={(e)=>{setNewForecast({...newForecast, content: e.target.value})}}
                        placeholder="Make your forecast"
                        className="w-100 textarea-static"
                        rows={12}
                        >
                    </textarea>
                </span>
                <span className="col-5 offset-md-1 p-3 mt-2 border border-info bg-white">
                    <div className="card h-100">
                        <div className="card-header"><strong>Preview</strong></div>
                        <div className="card-body">
                            <h5 className="card-title">{newForecast.title}</h5>
                            <span>{newForecast.html}</span>
                        </div>
                    </div>
                </span>
                <span className="col-5 p-3 mt-2 border border-info bg-white">
                    <div className="col-2">
                        <button className="btn btn-primary" onClick={onForecastSubmitClick}>
                            Add
                        </button>
                    </div>
                </span>
                
            </div>
        </Layout>
        
    )
} 

export default CreateForecastPage;