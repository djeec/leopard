import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const root = process.cwd();


export async function getFiles(author: string) {
  return fs.readdirSync(path.join(root, 'forecasts', author), 'utf-8')
}

// slug - https://en.wikipedia.org/wiki/Clean_URL#Slug
export async function getForecastBySlug(author: string, slug: string) {
  const source : string = fs.readFileSync(path.join(root, 'forecasts', author, `${slug}.md`), 'utf8')

  const { data, content } = matter(source)

  return {
    metaData: data,
    markdownBody: content,
  }
}

export async function getAllForecastsWithMetaData(author: string) {
  const files = fs.readdirSync(path.join(root, 'forecasts', author))

  // @ts-ignore
  const forecastDataArray = files.map((fileName : string) => {
    const source = fs.readFileSync(path.join(root, 'forecasts', author, fileName), 'utf8')
    const { data } = matter(source)
    console.log('reading: ' + fileName);
    console.log(data)
    return {
        metaData: data,
        slug: fileName.replace('.md', ''),
      }
  }, []);

  console.log(forecastDataArray)

  return forecastDataArray;
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