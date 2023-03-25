import { useState, useEffect } from "react";

import { REQUEST_STATUS, delay } from "@/pages/api/utilities";

// custom hook for retrieving data
function useGetTags(query:string, existing: string[]) {
    const [tagsData, setTagsData] = useState<string[]>([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchFunc(query:string) {
          try {
            const res = await fetch('/api/tags-data?' + new URLSearchParams({q:query}));
            const data = await res.json() as string[];

            // remove any existing tags
            const filteredData = data.filter(elem=>!existing.includes(elem))

            setTagsData(filteredData);
            setRequestStatus(REQUEST_STATUS.SUCCESS);
          } catch (e) {            
            setRequestStatus(REQUEST_STATUS.FAILURE);

            let message = 'Unknown error';
            if (e instanceof Error) message = e.message;

            setError(message);
          }
        }
        fetchFunc(query);
      }, [query, existing]);

      return {
        tagsData,
        requestStatus,
        error
      };
}

export default useGetTags;