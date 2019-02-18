import React, { Component } from "react";
import { Action, withStateMachine } from "react-automata";
import "./App.css";
import InfoCAF from "./components/Information/CAF";
import InfoCAFOnline from "./components/Information/CAFOnline";
import InfoCPAM from "./components/Information/CPAM";
import InfoEPN from "./components/Information/EPN";
import InfoGestionnaire from "./components/Information/Gestionnaire";
import InfoCms from "./components/Information/CMS";
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
import { ModalProvider } from "./components/Modal/ModalContext";
import ModalRoot from "./components/Modal/ModalRoot";
class App extends Component {
  render() {
    return (
      <div className="app">
        <ModalProvider>
          <ModalRoot />
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
          <Action is="infoGestionnaire">
            <InfoGestionnaire {...this.props} />
          </Action>
          <Action is="infoCms">
            <InfoCms {...this.props} />
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
        </ModalProvider>
      </div>
    );
  }
}

export default withStateMachine(statechart)(App);
