import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import { AxiosError, CanceledError } from "axios";

interface Genres {
  id: number;
  name: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await apiClient.get<FetchGenresResponse>("/genres", {
          signal: controller.signal,
        });
        const data = await res.data;
        setGenres(data.results);
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

  return { genres, error, isLoading };
};

export default useGenres;
