import * as React from "react";
import { Box, Flex, FlexProps } from "rebass";
import styled from "styled-components";

const StyledContainer = styled(Flex)<FlexProps>`
  justify-content: end;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const StyledContent = styled(Flex)<FlexProps>`
  position: relative;
  min-height: 60rem;
  width: 100%;
  max-width: 117rem;
  margin: 0 auto;
  border-radius: 0.4rem;
  padding: 3rem;
`;

const Layout: React.FunctionComponent<any> = ({ children }) => {
  return (
    <StyledContainer flexDirection="column">
      <Box />
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
};

export default Layout;
