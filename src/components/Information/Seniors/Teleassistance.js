import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { SENIORS, INFO_SENIORS_TELEASSISTANCE } from "../../BreadCrumps";

const InfoSeniorTeleassistance = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, INFO_SENIORS_TELEASSISTANCE]}
        />
      </div>
      <div className="content final">
        <h1>
          Contactez l'un des gestionnaires suivants pour avoir des
          renseignements :
        </h1>
        <p>
          Numéros de téléphone direct des gestionnaires de dossier :
          <h2 className="phoneList">
            <a href="tel:0231571635" target="_top">
              02 31 57 16 35
            </a>
            <br />
            <a href="tel:0231571589" target="_top">
              02 31 57 15 89
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorTeleassistance;
