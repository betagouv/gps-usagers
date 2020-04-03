import * as styledComponents from "styled-components";
import { ITheme } from ".";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, styled };
export default styled;
export const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
  height:100%;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

* {
  outline: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 1em;
}

a {
  text-decoration: none;
  color: #18273A;
  cursor: pointer;
}
button {
  cursor:pointer
}

form {
  width: 100%;
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color:#FFF;
}
`;
