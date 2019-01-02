import React, { Component } from "react";
import { Action, withStateMachine } from "react-automata";
import Start from "./components/Start";
import RSAValidation from "./components/RSA/Validation";
import RSASelection from "./components/RSA/Selection";
import RSALetter from "./components/RSA/Letter";
import RSAGestionnaire from "./components/RSA/Gestionnaire";
import RSACirconscription from "./components/RSA/Circonscription";

import InfoCAF from "./components/Information/CAF";
import InfoMSA from "./components/Information/MSA";
import InfoCPAM from "./components/Information/CPAM";
import statechart from "./statechart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
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
          <Action is="rsaGestionnaire">
            <RSAGestionnaire {...this.props} />
          </Action>
          <Action is="rsaCirconscription">
            <RSACirconscription {...this.props} />
          </Action>

          <Action is="infoCaf">
            <InfoCAF {...this.props} />
          </Action>
          <Action is="infoMsa">
            <InfoMSA {...this.props} />
          </Action>
          <Action is="infoCpam">
            <InfoCPAM {...this.props} />
          </Action>
        </div>
      </>
    );
  }
}

export default withStateMachine(statechart)(App);
