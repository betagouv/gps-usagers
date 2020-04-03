import * as React from "react";
import { MdCallSplit, MdDashboard, MdGroup, MdShowChart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Box, Flex, FlexProps, Text } from "rebass";
import styled from "styled-components";

const StyledContainer = styled(Flex)<FlexProps>`
  height: 100%;
`;

const StyledHeader = styled(Flex)<FlexProps>`
  flex: 0 0 8rem;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 101;
`;

const StyledContent = styled(Flex)<FlexProps>`
  flex: 1;
  z-index: 100;
`;

const Layout: React.SFC<{}> = ({ children }) => {
  return (
    <StyledContainer flexDirection="column">
      <StyledHeader
        justifyContent="space-between"
        alignItems="baseline"
        px={4}
        py={4}
        bg="blue"
      >
        <NavLink to="/">
          <Flex alignItems="baseline">
            <Text fontSize={8} color="white">
              GPS Usagers
            </Text>
            <Text ml={1} fontSize={4} color="white">
              - Administration
            </Text>
          </Flex>
        </NavLink>
        <Box>
          <a href="https://www.calvados.fr/contact" target="_blank">
            <Text fontSize={3} color="white">
              Voir le GPS usagers
            </Text>
          </a>
        </Box>
      </StyledHeader>
      <StyledContent>
        <Box bg="beige" width="50rem" p={4}>
          <NavLink to="/">
            <Flex my={3} alignItems="center">
              <MdDashboard size="2rem" />
              <Text fontSize={4} ml={2} fontWeight="bold">
                Dashboard
              </Text>
            </Flex>
          </NavLink>
          <NavLink to="/journeys">
            <Flex my={3} alignItems="center">
              <MdCallSplit size="2rem" />
              <Text fontSize={4} ml={2} fontWeight="bold">
                Gestion des parcours
              </Text>
            </Flex>
          </NavLink>
          <NavLink to="/users">
            <Flex my={3} alignItems="center">
              <MdGroup size="2rem" />
              <Text fontSize={4} ml={2} fontWeight="bold">
                Administration des utilisateurs
              </Text>
            </Flex>
          </NavLink>
          <NavLink to="/statistics">
            <Flex my={3} alignItems="center">
              <MdShowChart size="2rem" />
              <Text fontSize={4} ml={2} fontWeight="bold">
                Statistiques d'utilisation
              </Text>
            </Flex>
          </NavLink>
        </Box>
        <Box width="100%" px={6} py={5}>
          {children}
        </Box>
      </StyledContent>
    </StyledContainer>
  );
};

export default Layout;
