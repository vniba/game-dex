import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App.tsx";

interface Props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading color='gray.500' as='h2' marginY={4}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
