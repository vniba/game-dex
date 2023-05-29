import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { GoSearch } from "react-icons/all";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}
const Search = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}>
        <InputGroup>
          <InputLeftElement children={<GoSearch />} />
          <Input
            ref={ref}
            size='md'
            variant='outline'
            borderRadius={20}
            placeholder='Search games...'
          />
        </InputGroup>
      </form>
    </>
  );
};

export default Search;
