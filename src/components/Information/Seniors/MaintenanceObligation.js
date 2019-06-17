import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  INFO_SENIORS_MAINTENANCE_OBLIGATION
} from "../../BreadCrumps";

const InfoSeniorMAintenaceObligation = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, INFO_SENIORS_MAINTENANCE_OBLIGATION]}
        />
      </div>
      <div className="content final">
        <h1>
          Contactez le gestionnaire suivant pour obtenir un renseignement
        </h1>
        <p>
          Numéro de téléphone du gestionnaire de dossier
          <h2 className="phoneList">
            <a href="tel:0231571718" target="_top">
              02 31 57 17 18
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorMAintenaceObligation;
