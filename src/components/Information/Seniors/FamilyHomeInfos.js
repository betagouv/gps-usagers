import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_FAMILY_HOME,
  INFO_SENIORS_FAMILY_HOME_INFOS
} from "../../BreadCrumps";

const InfoSeniorFamilyHomeRequest = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            SENIORS,
            SENIORS_FAMILY_HOME,
            INFO_SENIORS_FAMILY_HOME_INFOS
          ]}
        />
      </div>
      <div className="content final">
        <h1>Des informations générales sont à votre disposition sur le site</h1>
        <p>
          en cliquant sur le lien suivant :{" "}
          <a
            href="https://www.calvados.fr/accueil/le-departement/solidarite---familles/autonomie--handicap/laccueil-familial.html"
            target="_top"
          >
            Accueil pour personnes âgées et/ou handicapées
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorFamilyHomeRequest;
