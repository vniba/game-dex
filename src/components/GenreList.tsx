import useGenres, { Genres } from "../hooks/useGenres.ts";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
  onSelectGenre: (genre: Genres) => void;
}
function GenreList({ onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner color="teal.700" size="md" />;

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY={2}>
          <HStack>
            <Image
              boxSize="33px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            />
            <Button
              fontSize="md"
              variant="link"
              onClick={() => onSelectGenre(g)}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
