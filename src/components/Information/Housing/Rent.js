import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { HOUSING, HOUSING_RENT, INFO_HOUSING_RENT } from "../../BreadCrumps";

const InfoHousingAssistance = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HOUSING, HOUSING_RENT, INFO_HOUSING_RENT]}
        />
      </div>
      <div className="content final">
        <h1>
          Contactez l'un des gestionnaires de dossier pour avoir des
          renseignements
        </h1>
        <p>
          Numéros de téléphone direct des gestionnaires de dossier :
          <h2 className="phoneList">
            <a href="tel:0231571263" target="_top">
              02 31 57 12 63
            </a>
            <br />
            <a href="tel:0231571271" target="_top">
              02 31 57 12 71
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoHousingAssistance;
