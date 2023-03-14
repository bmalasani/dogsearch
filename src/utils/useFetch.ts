import React, { useEffect, useState } from "react";

function useFetch<T>(url: string, options?: RequestInit) {
  const [response, setResponse] = useState<{
    loading: boolean;
    data: T | null;
    error: Error | null;
  }>({
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchUrl = async () => {
      setResponse((ps: any) => ({ ...ps, loading: true }));
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = (await response.json()) as T;
        console.log(result);
        setResponse((ps: any) => ({ ...ps, data: result, loading: false }));
      } catch (error: any) {
        console.log(error);
        setResponse((ps: any) => ({ ...ps, error: error, loading: false }));
      }
    };
    fetchUrl();
  }, [url]);

  return { ...response };
}

export default useFetch;
