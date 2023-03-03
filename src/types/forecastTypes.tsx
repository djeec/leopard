// see https://www.npmjs.com/package/gray-matter

// thanks https://bionicjulia.com/blog/setting-up-nextjs-markdown-blog-with-typescript


// export type ForecastMetaData = {
//     id: string;     // unique id
//     author: string; // author
//     timestamp: Date
//     title: string;  // title
//     tags: string[]; // tags for organizing
// }
export type ForecastMetaData = {
    [key:string] : string
}

export type ForecastProps = {
    metaData: ForecastMetaData;
    slug: string;
}

export type ForecastData = {
    forecastProps: ForecastProps;
    content: string;
    html: string;
}

export type ForecastPropsCollection = {
    forecasts?: ForecastProps[];
}

export interface AuthorForecastCollection extends ForecastPropsCollection {
    author: string; // just an example right now
}

