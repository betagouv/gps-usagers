import * as React from "react";
import styled from "../../../theme/styled-components";

interface IProps {
  width?: string;
  errors?: boolean;
  inline?: boolean;
  isSmall?: boolean;
}

export const Input = styled.input<IProps & React.HTMLProps<HTMLInputElement>>`
  width: ${props => props.width || "100%"};
  height: ${props => (props.isSmall ? "3.2rem" : "4.8rem")};
  padding: 0 1.5rem;
  font-size: 1.5rem;
  background-color: #fff;
  border: 0.1rem solid
    ${props => (props.errors ? "#FA9682" : "rgba(24, 39, 58, 0.15)")};
  border-radius: 0.8rem;
  display: ${props => (props.inline ? "inline-flex" : "initial")};
  &:focus {
    border: 0.1rem solid rgba(24, 39, 58, 0.3);
    outline: 0;
  }
  &::placeholder {
    opacity: 0.3;
    color: #18273a;
    font-size: 1.6rem;
  }
`;
