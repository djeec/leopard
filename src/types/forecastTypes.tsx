// see https://www.npmjs.com/package/gray-matter

// thanks https://bionicjulia.com/blog/setting-up-nextjs-markdown-blog-with-typescript


export type ForecastMetaData = {
    id: string;     // unique id
    author: string; // author
    timestamp: Date
    title: string;  // title
    tags: string[]; // tags for organizing
}

export type ForecastProps = {
    metaData: ForecastMetaData;
    slug: string;
}

export type ForecastPropsCollection = {
    forecasts?: ForecastProps[];
}

export interface AuthorForcastCollection extends ForecastPropsCollection {
    author: string; // just an example right now
}

