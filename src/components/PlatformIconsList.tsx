import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone,SiNintendo,BsGlobe} from 'react-icons/all';
import {Platform} from '../hooks/useGames.ts';
import {HStack, Icon} from '@chakra-ui/react';
import {IconType} from 'react-icons';


interface Props{
    platforms:Platform[]
}
function PlatformIconsList({platforms}:Props) {

    const iconMap:{[key:string]:IconType} = {
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid,
        mac:FaApple

    }
    return (
        <HStack justifyContent='space-around' marginY={4} >
            {platforms.map(platforms=><Icon color='teal.600'   as={iconMap[platforms.slug]} key={platforms.id}>{platforms.name}</Icon>)}
        </HStack>
    );
}

export default PlatformIconsList;
