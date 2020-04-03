import * as React from "react";
import { Button, ButtonProps, Text } from "rebass";

export const ButtonForm: React.FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => (
  <Button px={3} borderRadius={4} variant="darkBlue" {...rest}>
    <Text
      width={1}
      fontSize={4}
      textAlign="center"
      fontWeight="lighter"
      lineHeight={2.3}
    >
      {children}
    </Text>
  </Button>
);
