import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/all";

const SortSelector = () => {
  return (
    <>
      <Menu>
        <MenuButton fontWeight="bold" as={Button} rightIcon={<BsChevronDown />}>
          Sort by:nothing
        </MenuButton>
        <MenuList>
          <MenuItem>relevance</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
export default SortSelector;
