import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { ForecastProps, ForecastPropsCollection, ForecastData } from '@/types/forecastTypes';
import { renderMarkdown } from './renderMarkdown';


const root = process.cwd();
const forecastsDirectory = path.join(root, 'data', 'forecasts');


export async function getFiles(author: string) {
  return fs.readdirSync(path.join(forecastsDirectory, author), 'utf-8')
}

// slug - https://en.wikipedia.org/wiki/Clean_URL#Slug
export async function getForecastBySlug(author: string, slug: string) : Promise<ForecastData> {
  
  const source : string = fs.readFileSync(path.join(forecastsDirectory, author, `${slug}.md`), 'utf8')

  const { data, content } = matter(source)

  // render the html
  const contentHtml =await renderMarkdown(content);

  return {
    forecastProps: {metaData: data, slug: slug},
    content: content,
    html: contentHtml
  }
}

export async function getAllForecastsWithMetaData(authorId: string) : Promise<ForecastPropsCollection> {
    const files = fs.readdirSync(path.join(forecastsDirectory, authorId))

  // @ts-ignore
  const forecastDataArray = files.map((fileName : string) => {
    const source = fs.readFileSync(path.join(forecastsDirectory, authorId, fileName), 'utf8')
    const { data } = matter(source)

    let props : ForecastProps;

    props = {
        metaData: data,
        slug: fileName.replace('.md', ''),
      }

    return props;
  });

  let allForecastsWithMetaData : ForecastPropsCollection;
  allForecastsWithMetaData = {
    forecasts: forecastDataArray
  }

  return allForecastsWithMetaData;
}

// // todo - update to take author id
// export function getSortedForecasts() : ForecastMetaData[] {
//   // Get file names under /forecasts
//   const forecastsDirectory = path.join(process.cwd(), 'forecasts');
  
//   const fileNames: string[] = fs.readdirSync(forecastsDirectory);
//   const allPostsData = fileNames.map((fileName:string) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '');

//     // Read markdown file as string
//     const fullPath = path.join(forecastsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');

//     // Use gray-matter to parse the post metadata section
//     const {data, content} = matter(fileContents);

//     // Combine the data with the id
//     return {
//       id: id,
//       data: matterResult.data
//     };
//   });
  
//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.id < b.id) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }