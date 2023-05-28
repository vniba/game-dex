import {Game} from '../hooks/useGames.ts';
import {Card, CardBody, Heading, Image} from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList.tsx';

interface Props{
    game:Game
}
function GameCard({game}:Props) {
    return (
        <Card borderRadius={8} overflow='hidden'>
            <Image src={game.background_image}/>
            <CardBody textAlign='center'>
                <Heading  fontSize='2xl'>{game.name}</Heading>
                <PlatformIconsList platforms={game.parent_platforms.map(p=>p.platform)}/>
            </CardBody>
        </Card>
    );
}

export default GameCard;
