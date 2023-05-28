import {HStack, Switch, Text,useColorMode} from '@chakra-ui/react';
import {HiMoon,HiSun} from 'react-icons/hi'

function ColorModeSwitch() {
    const {toggleColorMode,colorMode} = useColorMode()
    return (
        <HStack>
            <Switch colorScheme='teal' isChecked={colorMode ==='dark'} onChange={toggleColorMode}/>
            <Text>{colorMode==='light'?<HiMoon/>:<HiSun/>}</Text>
        </HStack>
    );
}

export default ColorModeSwitch;
