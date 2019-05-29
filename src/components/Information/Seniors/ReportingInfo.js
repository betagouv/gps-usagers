import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_REPORTING,
  INFO_REPORTING_INFO
} from "../../BreadCrumps";

const InfoSeniorReportingInfo = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_REPORTING, INFO_REPORTING_INFO]}
        />
      </div>
      <div className="content final">
        <h1>Une plaquette d'information est à votre disposition :</h1>
        <p>
          En cliquant sur le lien suivant :{" "}
          <a
            href="https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Autonomie%20%26%20Handicap/Traitement-des-signalements-reclamations-et-evenements-indesirables-Plaquette-pour-professionnels.pdf"
            target="_top"
          >
            Télécharger la plaquette
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorReportingInfo;
