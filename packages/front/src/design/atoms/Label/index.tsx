import styled from "../../../theme/styled-components";

export const Label = styled.label<{
  fontFamily?: string;
  textAlign?: string;
  color?: string;
}>`
  display: block;
  margin-bottom: 0.6rem;
  font-size: 1em;
  font-family: inherit;
  color: ${props =>
    props.color ? props.theme.colors[props.color] : "inherit"};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  padding-right: 1rem;
`;
