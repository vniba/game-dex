import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import { AxiosError, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await apiClient.get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
        });
        const data = await res.data;
        setData(data.results);
      } catch (e) {
        if (e instanceof CanceledError) return;
        setError((e as AxiosError).message);
      } finally {
        setIsLoading(false);
      }
      return controller.abort();
    };
    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useData;
