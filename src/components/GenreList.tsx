import useGenres, { Genres } from "../hooks/useGenres.ts";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,


  useColorModeValue,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}
function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  const textColor = useColorModeValue("gray.900", "white");
  if (error) return null;
  if (isLoading) return <Spinner color='teal.700' size='md' />;

  return (
    <>
      <Heading fontSize='xl' color='green.500' marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data.map(g => (
          <ListItem key={g.id} paddingY={2}>
            <HStack>
              <Image
                objectFit='cover'
                boxSize='33px'
                borderRadius={8}
                src={getCroppedImageUrl(g.image_background)}
              />
              <Button
                color={g.id === selectedGenre?.id ? "teal" : textColor}
                whiteSpace='normal'
                textAlign='left'
                fontSize='md'
                variant='link'
                onClick={() => onSelectGenre(g)}>
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
