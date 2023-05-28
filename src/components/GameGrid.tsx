import useGames from "../hooks/useGames.ts";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkelton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";

function GameGrid() {
  const { error, data, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        padding={12}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />{" "}
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
