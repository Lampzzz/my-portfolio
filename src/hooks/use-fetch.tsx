"use client";

import { useEffect, useState } from "react";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (url: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        next: { revalidate: 60 },
      });

      const jsonData = (await response.json()) as T;

      setData(jsonData);
    } catch (error: unknown) {
      setError(
        error instanceof Error ? error : new Error("An unknown error occurred")
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { loading, error, data };
};
