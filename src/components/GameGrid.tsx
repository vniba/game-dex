import useGames from '../hooks/useGames.ts';
import {SimpleGrid, Text} from '@chakra-ui/react';
import GameCard from './GameCard.tsx';



function GameGrid() {

const {error,games} = useGames()

    return (
        <>
            {error && <Text color='red'>{error}</Text>}
           <SimpleGrid padding={12} columns={{sm:1,md:2,lg:3,xl:5}} spacing={10}>
                {games.map(game=><GameCard key={game.id} game={game} />)}
           </SimpleGrid>
        </>
    );
}

export default GameGrid;
