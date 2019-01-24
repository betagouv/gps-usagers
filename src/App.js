import React, { Component } from "react";
import { Action, withStateMachine } from "react-automata";
import Start from "./components/Start";
import RSAValidation from "./components/RSA/Validation";
import RSASelection from "./components/RSA/Selection";
import RSALetter from "./components/RSA/Letter";
import RSASituation from "./components/RSA/Situation";
import RSAGestionnaire from "./components/RSA/Gestionnaire";
import RSACirconscription from "./components/RSA/Circonscription";
import RSAOther from "./components/RSA/Other";

import InfoCAF from "./components/Information/CAF";
import InfoCAFOnline from "./components/Information/CAFOnline";
import InfoMSA from "./components/Information/MSA";
import InfoCPAM from "./components/Information/CPAM";
import InfoPE from "./components/Information/PE";
import InfoEPN from "./components/Information/EPN";
import InfoOnline from "./components/Information/Online";
import statechart from "./statechart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="app">
          <Action is="start">
            <Start {...this.props} />
          </Action>
          <Action is="rsa">
            <RSAValidation {...this.props} />
          </Action>
          <Action is="rsaSelection">
            <RSASelection {...this.props} />
          </Action>
          <Action is="rsaLetter">
            <RSALetter {...this.props} />
          </Action>
          <Action is="rsaSituation">
            <RSASituation {...this.props} />
          </Action>
          <Action is="rsaGestionnaire">
            <RSAGestionnaire {...this.props} />
          </Action>
          <Action is="rsaCirconscription">
            <RSACirconscription {...this.props} />
          </Action>
          <Action is="rsaOther">
            <RSAOther {...this.props} />
          </Action>

          <Action is="infoCaf">
            <InfoCAF {...this.props} />
          </Action>
          <Action is="infoCafOnline">
            <InfoCAFOnline {...this.props} />
          </Action>
          <Action is="infoMsa">
            <InfoMSA {...this.props} />
          </Action>
          <Action is="infoCpam">
            <InfoCPAM {...this.props} />
          </Action>
          <Action is="infoPe">
            <InfoPE {...this.props} />
          </Action>
          <Action is="infoEpn">
            <InfoEPN {...this.props} />
          </Action>
          <Action is="infoOnline">
            <InfoOnline {...this.props} />
          </Action>
        </div>
      </>
    );
  }
}

export default withStateMachine(statechart)(App);
