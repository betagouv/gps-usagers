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
import InfoCCAS from "./components/Information/CCAS";
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

import FamilySelection from "./components/Family/Selection";
import FamilyAdoption from "./components/Family/Adoption";
import ReportingSelection from "./components/Reporting/Selection";
import ReportingAdult from "./components/Reporting/Adult";
import ReportingAdultDifficulties from "./components/Reporting/AdultDifficulties";
import HousingSelection from "./components/Housing/Selection";
import HandicappedSelection from "./components/Handicapped/Selection";
import HandicappedRequest from "./components/Handicapped/Request";
import HandicappedPayment from "./components/Handicapped/Payment";
import HandicappedPaymentPch from "./components/Handicapped/PaymentPch";
import HandicappedPaymentThirdParty from "./components/Handicapped/PaymentThirdParty";
import HandicappedTrackingRequest from "./components/Handicapped/TrackingRequest";
import HandicappedTrackingRequestHelp from "./components/Handicapped/TrackingRequestHelp";
import SeniorsSelection from "./components/Seniors/Selection";
import SeniorsHomecareServices from "./components/Seniors/HomecareServices";
import SeniorsHomeHelps from "./components/Seniors/HomeHelps";
import SeniorsAutonomy from "./components/Seniors/Autonomy";
import SeniorsFamilyHome from "./components/Seniors/FamilyHome";
import SeniorsEHPAD from "./components/Seniors/EPHAD";
import SeniorsReporting from "./components/Seniors/Reporting";
import SeniorsReportingRequest from "./components/Seniors/ReportingRequest";
import HousingAssistance from "./components/Housing/Assistance";
import HousingRent from "./components/Housing/Rent";
import HousingAcquisition from "./components/Housing/Acquisition";
import HousingAcquisitionSelection from "./components/Housing/AcquisitionSelection";

import InfoReportingMinor from "./components/Information/Reporting/Minor";
import InfoReportingAdultDanger from "./components/Information/Reporting/AdultDanger";

import InfoFamilyAdoption from "./components/Information/Family/Adoption";
import InfoFamilySponsorship from "./components/Information/Family/Sponsorship";
import InfoFamilyChildcare from "./components/Information/Family/Childcare";
import InfoFamilyChildminder from "./components/Information/Family/Childminder";
import InfoFamilyChildsStructure from "./components/Information/Family/ChildsStructure";
import InfoFamilyCoupleLife from "./components/Information/Family/CoupleLife";
import InfoFamilyEducation from "./components/Information/Family/Education";
import InfoFamilyEducationCms from "./components/Information/Family/EducationCms";
import InfoFamilyHealthRecord from "./components/Information/Family/HealthRecord";
import InfoFamilyMedical from "./components/Information/Family/Medical";
import InfoFamilyMedicalCms from "./components/Information/Family/MedicalCms";
import InfoFamilyPlacementChild from "./components/Information/Family/PlacementChild";
import InfoFamilyPlacementChildCms from "./components/Information/Family/PlacementChildCms";
import InfoFamilyPregnancy from "./components/Information/Family/Pregnancy";
import InfoFamilyPregnancyCms from "./components/Information/Family/PregnancyCms";
import InfoFamilySecretChildbirth from "./components/Information/Family/SecretChildbirth";
import InfoFamilyWelfare from "./components/Information/Family/Welfare";

import InfoSeniorHomecareServiceAsk from "./components/Information/Seniors/HomecareAsk";
import InfoSeniorsFinanciersMeeting from "./components/Information/Seniors/FinanciersMeeting";
import InfoSeniorsReportingInfo from "./components/Information/Seniors/ReportingInfo";
import InfoSeniorsInformations from "./components/Information/Seniors/Informations";
import InfoHandicappedInfos from "./components/Information/Handicapped/Infos";
import InfoHandicappedHomecareServiceAsk from "./components/Information/Handicapped/HomecareAsk";
import InfoHandicappedRequestForm from "./components/Information/Handicapped/RequestForm";
import InfoHandicappedRequestFormCms from "./components/Information/Handicapped/RequestFormCms";
import InfoHandicappedRequestHelp from "./components/Information/Handicapped/RequestHelp";
import InfoHandicappedFinancial from "./components/Information/Handicapped/Financial";
import InfoHandicappedFamilyHome from "./components/Information/Handicapped/FamilyHome";
import InfoHandicappedTransport from "./components/Information/Handicapped/Transport";
import InfoHandicappedPaymentCaf from "./components/Information/Handicapped/PaymentCaf";
import InfoHandicappedPaymentPchHome from "./components/Information/Handicapped/PaymentPchHome";
import InfoHandicappedPaymentPchEstablishment from "./components/Information/Handicapped/PaymentPchEstablishment";
import InfoHandicappedPaymentThirdPartyHome from "./components/Information/Handicapped/PaymentThirdPartyHome";
import InfoHandicappedPaymentThirdPartyEstablishment from "./components/Information/Handicapped/PaymentThirdPartyEstablishment";
import InfoHandicappedTrackingRequest from "./components/Information/Handicapped/TrackingRequest";
import InfoHandicappedTrackingRequestFinancial from "./components/Information/Handicapped/TrackingRequestFinancial";
import InfoHandicappedTrackingRequestHelpFile from "./components/Information/Handicapped/TrackingRequestHelpFile";
import InfoHandicappedTrackingRequestHelpOnline from "./components/Information/Handicapped/TrackingRequestHelpOnline";
import InfoReportingAdultDifficultiesPersonal from "./components/Information/Reporting/AdultDifficultiesPersonal";
import InfoReportingAdultDifficultiesPro from "./components/Information/Reporting/AdultDifficultiesPro";
import InfoSeniorHomecareServiceDirectory from "./components/Information/Seniors/HomecareDirectory";
import InfoSeniorsHomeHelp from "./components/Information/Seniors/HomeHelp";
import InfoSeniorsHomeHelpSad from "./components/Information/Seniors/HomeHelpSad";
import InfoSeniorsHomeHelpClic from "./components/Information/Seniors/HomeHelpClic";
import InfoSeniorsFamilyHomeInfos from "./components/Information/Seniors/FamilyHomeInfos";
import InfoSeniorsFamilyHomeRequest from "./components/Information/Seniors/FamilyHomeRequest";
import InfoSeniorsFamilyHomeTracking from "./components/Information/Seniors/FamilyHomeTracking";
import InfoSeniorsEhpadList from "./components/Information/Seniors/EhpadList";
import InfoSeniorsEhpadRequest from "./components/Information/Seniors/EhpadRequest";
import InfoSeniorsEhpadHelpRequest from "./components/Information/Seniors/EhpadHelpRequest";
import InfoSeniorsEhpadHelpOnline from "./components/Information/Seniors/EhpadHelpOnline";
import InfoSeniorsApa from "./components/Information/Seniors/Apa";
import InfoSeniorsApaRequest from "./components/Information/Seniors/ApaRequest";
import InfoSeniorsApaHelpRequest from "./components/Information/Seniors/ApaHelpRequest";
import InfoSeniorsApaHelpOnline from "./components/Information/Seniors/ApaHelpOnline";
import InfoSeniorsTeleassistance from "./components/Information/Seniors/Teleassistance";
import InfoSeniorsSuccession from "./components/Information/Seniors/Succession";
import InfoSeniorsMaintenanceObligation from "./components/Information/Seniors/MaintenanceObligation";
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
          {/* FAMILY */}
          <Action is="familySelection">
            <FamilySelection {...this.props} />
          </Action>
          <Action is="familyAdoption">
            <FamilyAdoption {...this.props} />
          </Action>
          {/* INFO FAMILY */}
          <Action is="infoFamilyAdoption">
            <InfoFamilyAdoption {...this.props} />
          </Action>
          <Action is="infoFamilySponsorship">
            <InfoFamilySponsorship {...this.props} />
          </Action>
          <Action is="infoFamilyChildcare">
            <InfoFamilyChildcare {...this.props} />
          </Action>
          <Action is="infoFamilyChildminder">
            <InfoFamilyChildminder {...this.props} />
          </Action>
          <Action is="infoFamilyChildsStructure">
            <InfoFamilyChildsStructure {...this.props} />
          </Action>
          <Action is="infoFamilyCoupleLife">
            <InfoFamilyCoupleLife {...this.props} />
          </Action>
          <Action is="infoFamilyEducation">
            <InfoFamilyEducation {...this.props} />
          </Action>
          <Action is="infoFamilyEducationCms">
            <InfoFamilyEducationCms {...this.props} />
          </Action>
          <Action is="infoFamilyHealthRecord">
            <InfoFamilyHealthRecord {...this.props} />
          </Action>
          <Action is="infoFamilyMedical">
            <InfoFamilyMedical {...this.props} />
          </Action>
          <Action is="infoFamilyMedicalCms">
            <InfoFamilyMedicalCms {...this.props} />
          </Action>
          <Action is="infoFamilyPlacementChild">
            <InfoFamilyPlacementChild {...this.props} />
          </Action>
          <Action is="infoFamilyPlacementChildCms">
            <InfoFamilyPlacementChildCms {...this.props} />
          </Action>
          <Action is="infoFamilyPregnancy">
            <InfoFamilyPregnancy {...this.props} />
          </Action>
          <Action is="infoFamilyPregnancyCms">
            <InfoFamilyPregnancyCms {...this.props} />
          </Action>
          <Action is="infoFamilySecretChildbirth">
            <InfoFamilySecretChildbirth {...this.props} />
          </Action>
          <Action is="infoFamilyWelfare">
            <InfoFamilyWelfare {...this.props} />
          </Action>
          {/* REPORTING */}
          <Action is="reportingSelection">
            <ReportingSelection {...this.props} />
          </Action>
          <Action is="reportingAdult">
            <ReportingAdult {...this.props} />
          </Action>
          <Action is="reportingAdultDifficulties">
            <ReportingAdultDifficulties {...this.props} />
          </Action>
          {/* INFO REPORTING */}
          <Action is="infoReportingMinor">
            <InfoReportingMinor {...this.props} />
          </Action>
          <Action is="infoReportingAdultDanger">
            <InfoReportingAdultDanger {...this.props} />
          </Action>
          <Action is="infoReportingAdultDifficultiesPersonal">
            <InfoReportingAdultDifficultiesPersonal {...this.props} />
          </Action>
          <Action is="infoReportingAdultDifficultiesPro">
            <InfoReportingAdultDifficultiesPro {...this.props} />
          </Action>
          {/* HANDICAPPED */}
          <Action is="handicappedSelection">
            <HandicappedSelection {...this.props} />
          </Action>
          <Action is="handicappedRequest">
            <HandicappedRequest {...this.props} />
          </Action>
          <Action is="handicappedTrackingRequest">
            <HandicappedTrackingRequest {...this.props} />
          </Action>
          <Action is="handicappedTrackingRequestHelp">
            <HandicappedTrackingRequestHelp {...this.props} />
          </Action>
          <Action is="handicappedPayment">
            <HandicappedPayment {...this.props} />
          </Action>
          <Action is="handicappedPaymentPch">
            <HandicappedPaymentPch {...this.props} />
          </Action>
          <Action is="handicappedPaymentThirdParty">
            <HandicappedPaymentThirdParty {...this.props} />
          </Action>
          {/* INFO HANDICAPPED */}
          <Action is="infoHandicappedInfos">
            <InfoHandicappedInfos {...this.props} />
          </Action>
          <Action is="infoHandicappedHomecareServiceAsk">
            <InfoHandicappedHomecareServiceAsk {...this.props} />
          </Action>
          <Action is="infoHandicappedRequestForm">
            <InfoHandicappedRequestForm {...this.props} />
          </Action>
          <Action is="infoHandicappedRequestFormCms">
            <InfoHandicappedRequestFormCms {...this.props} />
          </Action>
          <Action is="infoHandicappedRequestHelp">
            <InfoHandicappedRequestHelp {...this.props} />
          </Action>
          <Action is="infoHandicappedFinancial">
            <InfoHandicappedFinancial {...this.props} />
          </Action>
          <Action is="infoHandicappedTrackingRequest">
            <InfoHandicappedTrackingRequest {...this.props} />
          </Action>
          <Action is="infoHandicappedTrackingRequestHelpFile">
            <InfoHandicappedTrackingRequestHelpFile {...this.props} />
          </Action>
          <Action is="infoHandicappedTrackingRequestHelpOnline">
            <InfoHandicappedTrackingRequestHelpOnline {...this.props} />
          </Action>
          <Action is="infoHandicappedTrackingRequestFinancial">
            <InfoHandicappedTrackingRequestFinancial {...this.props} />
          </Action>
          <Action is="infoHandicappedPaymentPchHome">
            <InfoHandicappedPaymentPchHome {...this.props} />
          </Action>
          <Action is="infoHandicappedPaymentPchEstablishment">
            <InfoHandicappedPaymentPchEstablishment {...this.props} />
          </Action>
          <Action is="infoHandicappedPaymentThirdPartyHome">
            <InfoHandicappedPaymentThirdPartyHome {...this.props} />
          </Action>
          <Action is="infoHandicappedPaymentThirdPartyEstablishment">
            <InfoHandicappedPaymentThirdPartyEstablishment {...this.props} />
          </Action>
          <Action is="infoHandicappedPaymentCaf">
            <InfoHandicappedPaymentCaf {...this.props} />
          </Action>
          <Action is="infoHandicappedFamilyHome">
            <InfoHandicappedFamilyHome {...this.props} />
          </Action>
          <Action is="infoHandicappedTransport">
            <InfoHandicappedTransport {...this.props} />
          </Action>
          {/* SENIORS */}
          <Action is="seniorsSelection">
            <SeniorsSelection {...this.props} />
          </Action>
          <Action is="seniorsHomeHelp">
            <SeniorsHomeHelps {...this.props} />
          </Action>
          <Action is="seniorsHomecareServices">
            <SeniorsHomecareServices {...this.props} />
          </Action>
          <Action is="seniorsAutonomy">
            <SeniorsAutonomy {...this.props} />
          </Action>
          <Action is="seniorsFamilyHome">
            <SeniorsFamilyHome {...this.props} />
          </Action>
          <Action is="seniorsEHPAD">
            <SeniorsEHPAD {...this.props} />
          </Action>
          <Action is="seniorsReporting">
            <SeniorsReporting {...this.props} />
          </Action>
          <Action is="seniorsReportingRequest">
            <SeniorsReportingRequest {...this.props} />
          </Action>
          {/* INFO SENIORS */}
          <Action is="infoSeniorHomecareServiceAsk">
            <InfoSeniorHomecareServiceAsk {...this.props} />
          </Action>
          <Action is="infoSeniorsInformations">
            <InfoSeniorsInformations {...this.props} />
          </Action>
          <Action is="infoSeniorHomecareServiceDirectory">
            <InfoSeniorHomecareServiceDirectory {...this.props} />
          </Action>
          <Action is="infoSeniorsHomeHelp">
            <InfoSeniorsHomeHelp {...this.props} />
          </Action>
          <Action is="infoSeniorsHomeHelpSad">
            <InfoSeniorsHomeHelpSad {...this.props} />
          </Action>
          <Action is="infoSeniorsHomeHelpClic">
            <InfoSeniorsHomeHelpClic {...this.props} />
          </Action>
          <Action is="infoSeniorsTeleassistance">
            <InfoSeniorsTeleassistance {...this.props} />
          </Action>
          <Action is="infoSeniorsSuccession">
            <InfoSeniorsSuccession {...this.props} />
          </Action>
          <Action is="infoSeniorsMaintenanceObligation">
            <InfoSeniorsMaintenanceObligation {...this.props} />
          </Action>
          <Action is="infoSeniorsApa">
            <InfoSeniorsApa {...this.props} />
          </Action>
          <Action is="infoSeniorsApaRequest">
            <InfoSeniorsApaRequest {...this.props} />
          </Action>
          <Action is="infoSeniorsApaHelpRequest">
            <InfoSeniorsApaHelpRequest {...this.props} />
          </Action>
          <Action is="infoSeniorsApaHelpOnline">
            <InfoSeniorsApaHelpOnline {...this.props} />
          </Action>
          <Action is="infoSeniorsFamilyHomeInfos">
            <InfoSeniorsFamilyHomeInfos {...this.props} />
          </Action>
          <Action is="infoSeniorsFamilyHomeRequest">
            <InfoSeniorsFamilyHomeRequest {...this.props} />
          </Action>
          <Action is="infoSeniorsFamilyHomeTracking">
            <InfoSeniorsFamilyHomeTracking {...this.props} />
          </Action>
          <Action is="infoSeniorsEhpadList">
            <InfoSeniorsEhpadList {...this.props} />
          </Action>
          <Action is="infoSeniorsEhpadRequest">
            <InfoSeniorsEhpadRequest {...this.props} />
          </Action>
          <Action is="infoSeniorsEhpadHelpRequest">
            <InfoSeniorsEhpadHelpRequest {...this.props} />
          </Action>
          <Action is="infoSeniorsEhpadHelpOnline">
            <InfoSeniorsEhpadHelpOnline {...this.props} />
          </Action>
          <Action is="infoSeniorsReportingInfo">
            <InfoSeniorsReportingInfo {...this.props} />
          </Action>
          <Action is="infoSeniorsFinanciersMeeting">
            <InfoSeniorsFinanciersMeeting {...this.props} />
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
          <Action is="infoCcas">
            <InfoCCAS {...this.props} />
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
