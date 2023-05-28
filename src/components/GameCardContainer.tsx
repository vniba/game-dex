import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function GameCardContainer({ children }: Props) {
  return (
    <Box
      borderRadius={8}
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
