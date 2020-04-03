import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { client } from "./apollo";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Routes } from "./routes";
import theme from "./theme";
import { GlobalStyle, ThemeProvider } from "./theme/styled-components";

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Routes />
      </>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
