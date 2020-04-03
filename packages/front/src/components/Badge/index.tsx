import * as React from "react";
import { Box, Card, CardProps, Flex } from "rebass";

export const Badge: React.FunctionComponent<CardProps> = ({
  children,
  ...rest
}) => {
  return (
    <Card
      pl={2}
      pr={3}
      pt="0.3rem"
      pb="0.3rem"
      borderRadius={9999}
      fontSize={4}
      width="fit-content"
      {...rest}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box ml={2}>{children}</Box>
      </Flex>
    </Card>
  );
};
