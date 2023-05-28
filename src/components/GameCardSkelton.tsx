import { Skeleton, SkeletonText, Card, CardBody } from "@chakra-ui/react";
function GameCardSkelton() {
  return (
    <Card>
      <Skeleton height="200px">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
}

export default GameCardSkelton;
