import "react-app-polyfill/ie9";

import React from "react";
import ReactDOM from "react-dom";
import ReactPiwik from "react-piwik";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

new ReactPiwik({
  url: "//stats.data.gouv.fr/",
  siteId: 79,
  trackErrors: true,
  enableLinkTracking: true,
  jsFilename: "piwik.js",
  phpFilename: "piwik.php"
});
// ReactPiwik.push(["enableLinkTracking"]);

ReactDOM.render(<App />, document.getElementById("gps-usagers"));

serviceWorker.unregister();
