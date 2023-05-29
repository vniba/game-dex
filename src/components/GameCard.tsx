import { Game } from "../hooks/useGames.ts";
import {
  Card,
  CardBody,
  CardFooter,
  chakra,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList.tsx";
import CriticStore from "./CriticStore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import GameCardContainer from "./GameCardContainer.tsx";
import { BsStarFill } from "react-icons/all";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  const bgColor = useColorModeValue("gray.300", "gray.900");
  const textColor = useColorModeValue("black", "white");
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
          <Card variant='filled' colorScheme='teal' bg={bgColor} h='400'>
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
              <Heading marginTop={1} color={textColor} fontSize='2xl'>
                {game.name}
              </Heading>
            </CardBody>
            <CardFooter>
              <HStack>
                <Text fontSize='md'>
                  <Icon as={BsStarFill} color='yellow.400' marginRight='1' />
                  {game.ratings_count}
                </Text>
              </HStack>
            </CardFooter>
          </Card>
        </GameCardContainer>
      </HoverableCard>
    </>
  );
}

export default GameCard;
