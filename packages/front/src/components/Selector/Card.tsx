// import { FindJourneysQuery_findJourneys } from "@gpsu/controller";
import * as React from "react";
import * as Icons from "react-icons/md";
import { Box, Card, CardProps, Flex, Text } from "rebass";
import styled from "styled-components";

const StyledCard = styled(Card)<CardProps>`
  height: 6.5rem;
  width: 100%;
  padding: 1.5rem;
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

export const SelectorCard: React.FunctionComponent<any> = ({
  name,
  icon,
  color
}) => {
  const Icon = icon ? Icons[icon] : null;
  return (
    <StyledCard m={2} variant={color}>
      <Flex justifyContent="flex-start" alignItems="center">
        <Box m={1}>{Icon && <Icon size={42} />}</Box>
        <Text ml={3} fontSize={8}>
          {name}
        </Text>
      </Flex>
    </StyledCard>
  );
};
