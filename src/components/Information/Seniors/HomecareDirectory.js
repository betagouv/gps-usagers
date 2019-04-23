import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_HOMECARE_SERVICES,
  INFO_SENIORS_HOMECARE_SERVICES_DIRECTORY
} from "../../BreadCrumps";

const InfoSeniorHomecareDirectory = ({ transition, machineState }) => {
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
            INFO_SENIORS_HOMECARE_SERVICES_DIRECTORY
          ]}
        />
      </div>
      <div className="content final">
        <h1>
          Contactez le gestionnaire de dossier pour avoir des renseignements
        </h1>
        <p>
          Numéro de téléphone du gestionnaires de dossier :
          <h2 className="phoneList">
            <a href="tel:0231571611" target="_top">
              02.31.57.16.11
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorHomecareDirectory;
