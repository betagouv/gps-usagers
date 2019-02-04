import React, { Component } from "react";
import { Action, withStateMachine } from "react-automata";
import ReactPiwik from "react-piwik";
import "./App.css";
import InfoCAF from "./components/Information/CAF";
import InfoCAFOnline from "./components/Information/CAFOnline";
import InfoCPAM from "./components/Information/CPAM";
import InfoEPN from "./components/Information/EPN";
import InfoGestionnaire from "./components/Information/Gestionnaire";
import InfoMSA from "./components/Information/MSA";
import InfoOnline from "./components/Information/Online";
import InfoPE from "./components/Information/PE";
import RSACirconscription from "./components/RSA/Circonscription";
import RSAGestionnaire from "./components/RSA/Gestionnaire";
import RSALetter from "./components/RSA/Letter";
import RSAOther from "./components/RSA/Other";
import RSASelection from "./components/RSA/Selection";
import RSASituation from "./components/RSA/Situation";
import RSAValidation from "./components/RSA/Validation";
import Start from "./components/Start";
import statechart from "./statechart";

class App extends Component {
  handleClick = () => {
    this.props.transition("BACK");
  };

  render() {
    return (
      <>
        <div className="app">
          <Action is="start">
            {ReactPiwik.push(["trackPageView", "start"])}
            <Start {...this.props} />
          </Action>
          <Action is="rsa">
            {ReactPiwik.push(["trackPageView", "rsa"])}
            <RSAValidation {...this.props} />
          </Action>
          <Action is="rsaSelection">
            {ReactPiwik.push(["trackPageView", "rsaSelection"])}
            <RSASelection {...this.props} />
          </Action>
          <Action is="rsaLetter">
            {ReactPiwik.push(["trackPageView", "rsaLetter"])}
            <RSALetter {...this.props} />
          </Action>
          <Action is="rsaSituation">
            {ReactPiwik.push(["trackPageView", "rsaSituation"])}
            <RSASituation {...this.props} />
          </Action>
          <Action is="rsaGestionnaire">
            {ReactPiwik.push(["trackPageView", "rsaGestionnaire"])}
            <RSAGestionnaire {...this.props} />
          </Action>
          <Action is="rsaCirconscription">
            {ReactPiwik.push(["trackPageView", "rsaCirconscription"])}
            <RSACirconscription {...this.props} />
          </Action>
          <Action is="rsaOther">
            {ReactPiwik.push(["trackPageView", "rsaOther"])}
            <RSAOther {...this.props} />
          </Action>

          <Action is="infoCaf">
            {ReactPiwik.push(["trackPageView", "infoCaf"])}
            <InfoCAF {...this.props} />
          </Action>
          <Action is="infoGestionnaire">
            {ReactPiwik.push(["trackPageView", "infoGestionnaire"])}
            <InfoGestionnaire {...this.props} />
          </Action>
          <Action is="infoCafOnline">
            {ReactPiwik.push(["trackPageView", "infoCafOnline"])}
            <InfoCAFOnline {...this.props} />
          </Action>
          <Action is="infoMsa">
            {ReactPiwik.push(["trackPageView", "infoMsa"])}
            <InfoMSA {...this.props} />
          </Action>
          <Action is="infoCpam">
            {ReactPiwik.push(["trackPageView", "infoCpam"])}
            <InfoCPAM {...this.props} />
          </Action>
          <Action is="infoPe">
            {ReactPiwik.push(["trackPageView", "infoPe"])}
            <InfoPE {...this.props} />
          </Action>
          <Action is="infoEpn">
            {ReactPiwik.push(["trackPageView", "infoEpn"])}
            <InfoEPN {...this.props} />
          </Action>
          <Action is="infoOnline">
            {ReactPiwik.push(["trackPageView", "infoOnline"])}
            <InfoOnline {...this.props} />
          </Action>
        </div>
      </>
    );
  }
}

export default withStateMachine(statechart, { devTools: true })(App);
