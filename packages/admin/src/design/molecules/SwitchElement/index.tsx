import { FieldProps, getIn } from "formik";
import * as React from "react";
import { Box, Flex, Text } from "rebass";
import { Label, Switch } from "../../";
import styled from "../../../theme/styled-components";

const StyledContainer = styled(Flex)`
  position: relative;
`;

export const SwitchElement: React.SFC<
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
  form: { touched, errors, values, setFieldValue },
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
        <Switch
          handleChange={
            ({ isChecked }: { isChecked: boolean }) =>
              setFieldValue(name, isChecked)
            // console.log(isChecked)
          }
          checked={getIn(values, name) || false}
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
