import React from "react";
import 'react-app-polyfill/ie9';
import ReactDOM from "react-dom";
import ReactPiwik from "react-piwik";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

new ReactPiwik({
  url: "//stats.data.gouv.fr/",
  siteId: 79,
  trackErrors: true,
  jsFilename: "piwik.js",
  phpFilename: "piwik.php"
});

ReactDOM.render(<App />, document.getElementById("gps-usagers"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
