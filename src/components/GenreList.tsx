import useGenres from "../hooks/useGenres.ts";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

function GenreList() {
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
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
