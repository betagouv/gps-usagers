// import { FindJourneysQuery_findJourneys } from "@gpsu/controller";
import * as React from "react";
import * as Icons from "react-icons/md";
import { Box, Card, CardProps, Flex, Text } from "rebass";
import styled from "styled-components";

const StyledChoice = styled(Card)<CardProps>`
  height: 10rem;
  width: 32rem;
  padding: 2rem;
  border: 1px solid #cdcdcd;
  border-radius: 0.8rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: white;
  &:hover {
    background-color: #fff;
    color: black;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0);
  }
`;

export const SelectorChoice: React.FunctionComponent<any> = ({
  name,
  icon,
  color
}) => {
  const Icon = icon ? Icons[icon] : null;
  return (
    <StyledChoice m={3} variant={color}>
      <Flex justifyContent="flex-start" alignItems="center">
        <Box m={1}>{Icon && <Icon size={42} />}</Box>
        <Text ml={3} fontSize={8}>
          {name}
        </Text>
      </Flex>
    </StyledChoice>
  );
};
