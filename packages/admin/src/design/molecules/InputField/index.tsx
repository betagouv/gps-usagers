import { FieldProps, getIn } from "formik";
import * as React from "react";
import { Box, Flex, Text } from "rebass";
import { Input, Label } from "../../";
import styled from "../../../theme/styled-components";

export const StyledContainer = styled(Flex)`
  position: relative;
`;

export const StyledCross = styled.div`
  position: absolute;
  cursor: pointer;
  top: 3.7rem;
  right: 1.2rem;
`;

export const InputField: React.SFC<
  FieldProps<any> & {
    prefix: React.ReactNode;
    label?: string;
    type?: string;
    information?: string;
    caution?: string;
    flexDirection?: string;
    placeholder?: string;
    autocomplete?: string;
    isSmall?: boolean;
    isDisabled?: boolean;
  }
> = ({
  field: { name, onChange, onBlur, ...field },
  form: { touched, errors, values },
  autocomplete,
  placeholder,
  information,
  flexDirection,
  isDisabled,
  isSmall,
  label,
  type,
  ...rest
}) => {
  let errorMsg = "";
  if (name) {
    const error = getIn(errors, name);
    const touch = getIn(touched, name);
    errorMsg = touch && error ? error : null;
  }

  return (
    <StyledContainer
      // @ts-ignore
      flexDirection={flexDirection ? flexDirection : "column"}
      alignItems="baseline"
      fontSize={4}
      {...rest}
    >
      <Flex
        width={flexDirection === "row" ? 1 / 3 : 1}
        justifyContent="space-between"
      >
        <Label>{label}</Label>
      </Flex>
      <Box width={flexDirection === "row" ? 2 / 3 : 1}>
        <Input
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          errors={!!errorMsg}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autocomplete}
          value={getIn(values, name) || ""}
          isSmall={isSmall || false}
          disabled={isDisabled || false}
        />
      </Box>
      {errorMsg && (
        <Text color="red" mt={1} fontWeight={6}>
          {errorMsg}
        </Text>
      )}
    </StyledContainer>
  );
};
