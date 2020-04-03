import * as React from "react";
import { Heading } from "rebass";

const Title: React.FunctionComponent<any> = ({ children, ...rest }) => {
  return (
    <Heading
      fontFamily="Roboto Slab"
      fontWeight={700}
      fontSize={11}
      color="red"
      ml={4}
      mb={3}
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default Title;
