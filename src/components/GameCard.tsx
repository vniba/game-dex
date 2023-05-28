import {Game} from '../hooks/useGames.ts';
import {Card, CardBody, Heading, HStack, Image} from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList.tsx';
import CriticStore from '../hooks/CriticStore.tsx';

interface Props{
    game:Game
}
function GameCard({game}:Props) {
    return (
        <Card borderRadius={8} overflow='hidden' alignItems='center'>
            <Image src={game.background_image}/>
            <CardBody textAlign='center'>
                <Heading  fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                <PlatformIconsList platforms={game.parent_platforms.map(p=>p.platform)}/>
                <CriticStore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;
