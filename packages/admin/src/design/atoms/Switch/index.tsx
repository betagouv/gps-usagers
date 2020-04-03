import * as React from "react";
import { Box, BoxProps } from "rebass";
import styled from "../../../theme/styled-components";

const CheckBoxWrapper = styled.div`
  position: relative;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

interface IProps extends BoxProps {
  checked: boolean;
  handleChange: any;
}

interface IState {
  isChecked: boolean;
}

export class Switch extends React.Component<IProps, IState> {
  state: IState = {
    isChecked: this.props.checked || false
  };

  handleClick = () => {
    const { handleChange } = this.props;
    this.setState(
      state => ({ isChecked: !state.isChecked }),
      () => handleChange({ isChecked: this.state.isChecked })
    );
  };

  public render() {
    const { checked, ...rest } = this.props;
    const { isChecked } = this.state;

    return (
      <Box {...rest}>
        <CheckBoxWrapper>
          <CheckBox
            onClick={this.handleClick}
            id="checkbox"
            type="checkbox"
            checked={isChecked}
          />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
      </Box>
    );
  }
}
