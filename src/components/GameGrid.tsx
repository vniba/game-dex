import  {useEffect, useState} from 'react';
import apiClient from '../services/api-client.ts';
import {AxiosError} from 'axios';
import {Text} from '@chakra-ui/react';

interface Game {
    id: number
    name: string
}

interface FetchGamesResponse {
    count: number
    results: Game[]
}

function GameGrid() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await apiClient.get<FetchGamesResponse>('/games')
                const data = await res.data
                setGames(data.results)
            } catch (e) {
                setError((e as AxiosError).message)
            }
        }
        getData()
    }, []);

    return (
        <>
            {error && <Text color='red'>{error}</Text>}
            <ul>
                {games.map(game=><li key={game.id}>{game.name}</li> )}
            </ul>
        </>
    );
}

export default GameGrid;
