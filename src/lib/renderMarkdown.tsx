import { remark } from "remark";
import html from 'remark-html';

export async function renderMarkdown(md:string) : Promise<string> {
    const processedContent = await remark()
    .use(html)
    .process(md);
    
    const contentHtml = processedContent.toString();

    return contentHtml;
}

