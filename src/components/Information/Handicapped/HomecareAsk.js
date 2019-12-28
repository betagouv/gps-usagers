import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  HANDICAPPED,
  INFO_HANDICAPPED_HOMECARE_SERVICES_ASK
} from "../../BreadCrumps";

const InfoHandicappedHomecareAsk = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HANDICAPPED, INFO_HANDICAPPED_HOMECARE_SERVICES_ASK]}
        />
      </div>
      <div className="content final">
        <h1>Obtenir le formulaire de demande</h1>
        Dans l'un des CCAS (centres communaux d'action sociale) : Rendez-vous
        dans le CCAS de votre mairie
      </div>
    </div>
  );
};

export default InfoHandicappedHomecareAsk;