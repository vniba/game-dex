import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "../../ColorModeSwitch.tsx";
import Search from "./Search.tsx";
function NavBar() {
  return (
    <HStack marginY={2} padding='12px'>
      <Text fontSize='2xl' color='teal' fontFamily='monospace'>
        GameHub
      </Text>
      <Search />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
