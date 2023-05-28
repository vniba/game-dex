import {Badge} from '@chakra-ui/react';

interface Props{
    score:number
}
function CriticStore({score}:Props) {

    const color = score >75?'green':score>60 ? 'yellow' : 'red'
    return (
        <Badge variant='subtle' colorScheme={color}>{score}</Badge>
    );
}

export default CriticStore;
