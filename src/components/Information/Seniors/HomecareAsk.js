import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_HOMECARE_SERVICES,
  INFO_SENIORS_HOMECARE_SERVICES_ASK
} from "../../BreadCrumps";

const InfoSeniorHomecareAsk = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            SENIORS,
            SENIORS_HOMECARE_SERVICES,
            INFO_SENIORS_HOMECARE_SERVICES_ASK
          ]}
        />
      </div>
      <div className="content final">
        <h1>Remplissez le formulaire de demande</h1>
        Dans l'un des CCAS (centres communaux d'action sociale) : Rendez-vous
        dans le CCAS de votre mairie
      </div>
    </div>
  );
};

export default InfoSeniorHomecareAsk;
