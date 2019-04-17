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

import HousingSelection from "./components/Housing/Selection";
import SeniorsSelection from "./components/Seniors/Selection";
import SeniorsFinancialAid from "./components/Seniors/FinancialAid";
import SeniorsInstitutions from "./components/Seniors/Institutions";
import HousingAssistance from "./components/Housing/Assistance";
import HousingRent from "./components/Housing/Rent";
import HousingAcquisition from "./components/Housing/Acquisition";
import HousingAcquisitionSelection from "./components/Housing/AcquisitionSelection";
import InfoHousingSearch from "./components/Information/Housing/Search";
import InfoHousingAssistance from "./components/Information/Housing/Assistance";
import InfoHousingAssistanceRequest from "./components/Information/Housing/AssistanceRequest";
import InfoHousingAssistanceHelp from "./components/Information/Housing/AssistanceHelp";
import InfoHousingRent from "./components/Information/Housing/Rent";
import InfoHousingRentRequest from "./components/Information/Housing/RentRequest";
import InfoHousingRentRequestCms from "./components/Information/Housing/RentRequestCms";
import InfoHousingRentHelp from "./components/Information/Housing/RentHelp";
import InfoHousingAcquisitionInfos from "./components/Information/Housing/AcquisitionInfos";
import InfoHousingAcquisitionHelp from "./components/Information/Housing/AcquisitionHelp";
import InfoHousingAssistanceRequestCms from "./components/Information/Housing/AssistanceRequestCms";
import InfoHousingEnergyBills from "./components/Information/Housing/EnergyBills";

class App extends Component {
  render() {
    return (
      <div className="app">
        <ModalProvider>
          <ModalRoot />
          <Action is="start">
            <Start {...this.props} />
          </Action>
          {/* RSA */}
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
          {/* HOUSING */}
          <Action is="housingSelection">
            <HousingSelection {...this.props} />
          </Action>
          <Action is="housingAssistance">
            <HousingAssistance {...this.props} />
          </Action>
          <Action is="housingRent">
            <HousingRent {...this.props} />
          </Action>
          <Action is="housingAcquisition">
            <HousingAcquisition {...this.props} />
          </Action>
          <Action is="housingAcquisitionSelection">
            <HousingAcquisitionSelection {...this.props} />
          </Action>
          {/* SEnIORS */}
          <Action is="seniorsSelection">
            <SeniorsSelection {...this.props} />
          </Action>
          <Action is="seniorsInstitutions">
            <SeniorsInstitutions {...this.props} />
          </Action>
          <Action is="seniorsFinancialAid">
            <SeniorsFinancialAid {...this.props} />
          </Action>
          {/* INFO HOUSING */}
          <Action is="infoHousingSearch">
            <InfoHousingSearch {...this.props} />
          </Action>
          <Action is="infoHousingAssistance">
            <InfoHousingAssistance {...this.props} />
          </Action>
          <Action is="infoHousingAssistanceRequest">
            <InfoHousingAssistanceRequest {...this.props} />
          </Action>
          <Action is="infoHousingAssistanceRequestCms">
            <InfoHousingAssistanceRequestCms {...this.props} />
          </Action>
          <Action is="infoHousingAssistanceHelp">
            <InfoHousingAssistanceHelp {...this.props} />
          </Action>
          <Action is="infoHousingRent">
            <InfoHousingRent {...this.props} />
          </Action>
          <Action is="infoHousingRentRequest">
            <InfoHousingRentRequest {...this.props} />
          </Action>
          <Action is="infoHousingRentRequestCms">
            <InfoHousingRentRequestCms {...this.props} />
          </Action>
          <Action is="infoHousingRentHelp">
            <InfoHousingRentHelp {...this.props} />
          </Action>
          <Action is="infoHousingAcquisitionInfos">
            <InfoHousingAcquisitionInfos {...this.props} />
          </Action>
          <Action is="infoHousingAcquisitionHelp">
            <InfoHousingAcquisitionHelp {...this.props} />
          </Action>
          <Action is="infoHousingEnergyBills">
            <InfoHousingEnergyBills {...this.props} />
          </Action>

          {/* INFO RSA */}
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
