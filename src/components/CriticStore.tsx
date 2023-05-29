import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
function CriticStore({ score }: Props) {
  const color = score > 75 ? "whatsapp" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      fontSize='xl'
      fontFamily='monospace'
      variant='solid'
      colorScheme={color}>
      {score}
    </Badge>
  );
}

export default CriticStore;
