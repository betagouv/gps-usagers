import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_FAMILY_HOME,
  INFO_SENIORS_FAMILY_HOME_TRACKING
} from "../../BreadCrumps";

const InfoSeniorFamilyHomeTracking = ({ transition, machineState }) => {
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
            INFO_SENIORS_FAMILY_HOME_TRACKING
          ]}
        />
      </div>
      <div className="content final">
        <h1>Vous pouvez contacter l'un des gestionnaires suivant pour :</h1>
        <p>
          - Bénéficier d’un accueil familial
          <h2 className="phoneList">
            <a href="tel:0231571635" target="_top">
              02 31 57 16 35
            </a>
          </h2>
        </p>
        <p>
          - Suivre mon dossier d'aide sociale
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

export default InfoSeniorFamilyHomeTracking;
