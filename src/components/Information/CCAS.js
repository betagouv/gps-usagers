import React from "react";
import { Back, Feedback } from "../../components";
import { RSA, RECIPIENT_RSA, RSA_LETTER, INFO_CCAS } from "../BreadCrumps";
import "./Styles.css";

const InfoMSA = ({ transition, machineState }) => {
  let breadCrumps;
  breadCrumps = [RSA, RECIPIENT_RSA, RSA_LETTER, INFO_CCAS];

  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={breadCrumps}
        />
      </div>
      <div className="content final">
        <h1>
          Rendez-vous dans votre mairie ou dans l'un des CCAS (centres communaux
          d'action sociale) de votre mairie
        </h1>
      </div>
    </div>
  );
};

export default InfoMSA;
