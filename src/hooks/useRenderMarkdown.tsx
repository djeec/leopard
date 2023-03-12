import { renderMarkdown } from "@/lib/renderMarkdown";
import { useState, useEffect } from "react";

function useRenderMarkdown(md:string) {
    const [html, setHtml] = useState("");

    useEffect(() => {
        async function renderMarkdownFunc(theMd:string) {
            const renderedHtml = await renderMarkdown(theMd);

            setHtml(renderedHtml);
        }

        renderMarkdownFunc(md);

    }, [md]);

    return {
    html
    };
}

export default useRenderMarkdown;