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
        <h1>
          Une plaquette d'information est à votre disposition en cliquant sur le
          lien suivant :
        </h1>
        <p>
          en cliquant sur le lien suivant :{" "}
          <a
            href="https://www.calvados.fr/accueil/le-departement/solidarite---familles/autonomie--handicap/maintien-a-domicile.html"
            target="_top"
          >
            https://www.calvados.fr/accueil/le-departement/solidarite---familles/autonomie--handicap/maintien-a-domicile.html
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorReportingInfo;
