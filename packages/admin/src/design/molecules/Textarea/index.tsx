import { FieldProps, getIn } from "formik";
import * as React from "react";
import { Box, Flex, Text } from "rebass";
import { Label } from "../../";
import styled from "../../../theme/styled-components";

interface IProps {
  width?: string;
  errors?: boolean;
  inline?: boolean;
}

const StyledTextArea = styled("textarea")<
  IProps & React.HTMLProps<HTMLTextAreaElement>
>`
  width: ${props => props.width || "100%"};
  min-height: 10rem;
  padding: 1.5rem;
  font-size: 1em;
  background-color: #fff;
  border: 0.1rem solid
    ${props => (props.errors ? "#FA9682" : "rgba(25, 28, 38, 0.15)")};
  border-radius: 0.8rem;
  display: ${props => (props.inline ? "inline-flex" : "initial")};
  &:focus {
    border: 0.1rem solid #2c3949;
    outline: 0;
  }
  &::placeholder {
    font-size: 1.6rem;
    color: rgba(25, 28, 38, 0.3);
  }
`;

export const Textarea: React.SFC<
  FieldProps<any> & {
    label?: string;
    placeholder?: string;
    flexDirection?: string;
  }
> = ({
  field: { name, onChange, onBlur, ...field },
  form: { touched, errors, values },
  placeholder,
  label,
  flexDirection,
  ...rest
}) => {
  let errorMsg = "";
  if (name) {
    const error = getIn(errors, name);
    const touch = getIn(touched, name);
    errorMsg = touch && error ? error : null;
  }

  return (
    <Flex
      // @ts-ignore
      flexDirection={flexDirection ? flexDirection : "column"}
      alignItems="flex-start"
      fontSize={4}
      {...rest}
    >
      <Box pt={1} width={flexDirection === "row" ? 1 / 4 : 1}>
        <Label>{label}</Label>
      </Box>
      <Box width={flexDirection === "row" ? 3 / 4 : 1}>
        <StyledTextArea
          name={name}
          placeholder={placeholder}
          errors={!!errorMsg}
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={getIn(values, name) || ""}
        />
      </Box>
      {errorMsg && (
        <Text color="red" mt={1} fontWeight={6}>
          {errorMsg}
        </Text>
      )}
    </Flex>
  );
};
