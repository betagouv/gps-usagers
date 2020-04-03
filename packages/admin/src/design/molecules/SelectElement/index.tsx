import { FieldProps, getIn } from "formik";
import * as React from "react";
import SelectBase from "react-select";
import { Box, Flex, Text } from "rebass";

interface IProps extends FieldProps {
  label?: string;
  placeholder?: string;
  information?: string;
  caution?: string;
  isMulti?: boolean;
  defaultValue?: { value: string | boolean; label: string };
  options?: [{ value: string | boolean; label: string }];
  isSmall?: boolean;
  isDisabled?: boolean;
  flexDirection?: string;
  onChange?: (data: object) => void;
}

const resolution = 6.5;
// window.screen.width > 1440 ? 6.5 : window.screen.width < 1120 ? 3 : 4.5;

export class SelectElement extends React.Component<IProps, any> {
  handleChange = (data: any) => {
    const {
      field: { name },
      isMulti,
      onChange
    } = this.props;

    if (isMulti) {
      this.props.form.setFieldValue(name, data.map((d: any) => d.value));
    } else {
      this.props.form.setFieldValue(name, data.value);
    }
    if (onChange) {
      onChange(data);
    }
  };

  handleBlur = () => {
    const { name } = this.props.field;
    this.props.form.setFieldTouched(name, true);
  };

  render() {
    const {
      field: { name },
      form: { touched, errors, values },
      label,
      placeholder,
      information,
      flexDirection,
      caution,
      options,
      onChange,
      defaultValue,
      isMulti,
      isDisabled,
      isSmall,
      ...rest
    } = this.props;

    let errorMsg = "";
    if (name) {
      const error = getIn(errors, name);
      const touch = getIn(touched, name);
      errorMsg = touch && error ? error : null;
    }

    return (
      <Flex flexDirection="column" alignItems="baseline" fontSize={4} {...rest}>
        <Flex
          width={flexDirection === "row" ? 1 / 3 : 1}
          justifyContent="space-between"
        >
          {label && (
            <Text
              fontFamily={flexDirection === "row" ? "GraphikMedium" : "Graphik"}
            >
              {label}
            </Text>
          )}
        </Flex>
        <Box width={flexDirection === "row" ? 2 / 3 : 1}>
          <Text textAlign="left">
            <SelectBase
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              name={name}
              placeholder={placeholder || "Sélectionnez"}
              options={options}
              isDisabled={isDisabled}
              value={
                options && isMulti
                  ? options.filter(
                      option =>
                        getIn(values, name) &&
                        getIn(values, name).includes(option.value)
                    )
                  : options &&
                    options.filter(
                      option => option.value === getIn(values, name)
                    )
              }
              isMulti={isMulti || false}
              theme={(theme: any) => ({
                ...theme,
                spacing: {
                  baseUnit: isSmall ? resolution / 2 : resolution,
                  menuGutter: "0.4rem"
                },
                borderRadius: "0.8rem",
                colors: {
                  ...theme.colors,
                  neutral20: errorMsg ? "#FA9682" : "hsl(0, 0%, 80%)",
                  primary: "rgba(24, 39, 58, 0.15)",
                  primary25: "rgba(24, 39, 58, 0.1)",
                  primary50: "rgba(24, 39, 58, 0.1)",
                  primary75: "#000"
                }
              })}
            />
          </Text>
          {errorMsg && (
            <Text color="red" mt={2} fontWeight={6}>
              {errorMsg}
            </Text>
          )}
        </Box>
      </Flex>
    );
  }
}
