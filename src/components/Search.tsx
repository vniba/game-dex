import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { GoSearch } from "react-icons/all";

const Search = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<GoSearch />} />
        <Input
          size='md'
          variant='outline'
          borderRadius={20}
          placeholder='Search games...'
        />
      </InputGroup>
    </>
  );
};

export default Search;
