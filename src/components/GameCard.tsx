import { Game } from "../hooks/useGames.ts";
import {
  Card,
  CardBody,
  CardFooter,
  chakra,
  Flex,
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
import { BsStarFill, BsClockFill } from "react-icons/all";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  const bgColor = useColorModeValue("gray.300", "gray.900");
  const textColor = useColorModeValue("black", "white");
  const HoverableCard = chakra(Card, {
    baseStyle: {
      transition: "transform ,color, .3s linear",
      _hover: {
        transform: "scale(1.02)",
        border: ".5px solid teal",
      },
    },
  });
  return (
    <>
      <HoverableCard>
        <GameCardContainer>
          <Card variant='outline' colorScheme='teal' bg={bgColor} h='400'>
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
            <CardFooter justifyContent='space-evenly'>
              <Flex align='center'>
                <Icon as={BsStarFill} color='yellow.400' marginRight='1' />
                <Text fontSize='md'>{game.ratings_count}</Text>
              </Flex>
              <Flex align='center'>
                <Icon as={BsClockFill} marginRight='1' color='gray.400' />
                <Text fontSize='md'>{game.playtime}</Text>
              </Flex>
            </CardFooter>
          </Card>
        </GameCardContainer>
      </HoverableCard>
    </>
  );
}

export default GameCard;
