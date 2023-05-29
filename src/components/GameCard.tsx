import { Game } from "../hooks/useGames.ts";
import {
  Card,
  CardBody,
  chakra,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList.tsx";
import CriticStore from "./CriticStore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import GameCardContainer from "./GameCardContainer.tsx";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  const HoverableCard = chakra(Card, {
    baseStyle: {
      transition: "transform .3s ease",
      _hover: {
        transform: "scale(1.05)",
      },
    },
  });
  return (
    <>
      <HoverableCard>
        <GameCardContainer>
          <Card variant='filled' bg='blackAlpha.400' colorScheme='teal'>
            <Image
              src={getCroppedImageUrl(game.background_image)}
              alt={game.name}
            />
            <CardBody textAlign='center'>
              <HStack justifyContent='space-between'>
                <PlatformIconsList
                  platforms={game.parent_platforms.map(p => p.platform)}
                />
                <CriticStore score={game.metacritic} />
              </HStack>
              <Heading fontSize='2xl'>{game.name}</Heading>
            </CardBody>
          </Card>
        </GameCardContainer>
      </HoverableCard>
    </>
  );
}

export default GameCard;
