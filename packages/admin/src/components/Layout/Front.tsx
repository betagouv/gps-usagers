import * as React from "react";
import { Flex, FlexProps } from "rebass";
import styled from "styled-components";

const StyledContainer = styled(Flex)<FlexProps>`
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 90vh;
`;

const StyledContent = styled(Flex)<FlexProps>`
  position: relative;
  min-height: 60rem;
  width: 100%;
  max-width: 117rem;
  margin: 0 auto;
  border: 8px solid #48b95f;
  border-radius: 0.4rem;
  padding: 3rem;
  font-size: 1.6rem;
`;

const LayoutFront: React.FunctionComponent<any> = ({ children }) => {
  return (
    <StyledContainer flexDirection="column">
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
};

export default LayoutFront;
