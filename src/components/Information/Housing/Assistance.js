import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";

const InfoHousingAssistance = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content final">
        <h1>
          Contactez l'un des gestionnaires de dossier pour avoir des
          renseignements
        </h1>
        <p>
          Numéros de téléphone direct des gestionnaires de dossier :
          <h2 className="phoneList">
            <a href="tel:0231571257" target="_top">
              02 31 57 12 57
            </a>
            <br />
            <a href="tel:0231571255" target="_top">
              02 31 57 12 55
            </a>
            <br />
            <a href="tel:0231571264" target="_top">
              02 31 57 12 64
            </a>
            <br />
            <a href="tel:0231571252" target="_top">
              02 31 57 12 52
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoHousingAssistance;
