import * as React from "react";
import { Flex, FlexProps } from "rebass";
import styled from "styled-components";

const StyledContainer = styled(Flex)<FlexProps>`
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App: React.FunctionComponent<any> = ({ children }) => {
  return <StyledContainer bg="blue">{children}</StyledContainer>;
};

export default App;
