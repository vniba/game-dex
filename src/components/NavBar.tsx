import {HStack, Text} from '@chakra-ui/react'
import ColorModeSwitch from '../../ColorModeSwitch.tsx';
function NavBar() {
    return (
       <HStack justifyContent='space-between' padding='12px'>
           <Text fontSize="2xl" color='teal' fontFamily="monospace">GameHub</Text>
           <ColorModeSwitch/>
       </HStack>
    );
}

export default NavBar;
