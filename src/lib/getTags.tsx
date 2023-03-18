import path from 'path';
import {promises as fs} from 'fs';

const root = process.cwd();
const tagsDirectory = path.join(root, 'data');


export async function getTags(filter : string) : Promise<string[]> {
  if (!filter)
    return [];

  const fullPath : string = path.join(tagsDirectory, "tags.json");

  const fileContents = await fs.readFile(fullPath, 'utf8');

  const tags = JSON.parse(fileContents) as string[];

  function checkTag(tag:string) {
    return tag.startsWith(filter);
  }

  return tags.filter(checkTag);
}

