import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "../../ColorModeSwitch.tsx";
import Search from "./Search.tsx";

interface Props {
  onSearch: (searchText: string) => void;
}
function NavBar({ onSearch }: Props) {
  return (
    <HStack marginY={2} padding='12px'>
      <Text fontSize='2xl' color='teal' fontFamily='monospace'>
        GameHub
      </Text>
      <Search onSearch={searchText => onSearch(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
