import {useEffect, useState} from 'react';
import apiClient from '../api-client.ts';
import {AxiosError, CanceledError} from 'axios';


interface Game {
    id: number
    name: string
}

interface FetchGamesResponse {
    count: number
    results: Game[]
}
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');


    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            try {
                const res = await apiClient.get<FetchGamesResponse>('/games',{signal:controller.signal})
                const data = await res.data
                setGames(data.results)

            } catch (e) {
                if (e instanceof CanceledError) return
                setError((e as AxiosError).message)
            }
            return controller.abort()
        }
        fetchData()

    }, []);

    return {games,error}
}

export default useGames
