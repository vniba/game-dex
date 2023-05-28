import {useEffect, useState} from 'react';
import apiClient from '../services/api-client.ts';
import {AxiosError, CanceledError} from 'axios';


export interface Platform{
    id:number
    name:string
    slug:string
}
export interface Game {
    id: number
    name: string
    background_image:string
    parent_platforms: { platform:Platform }[]
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
