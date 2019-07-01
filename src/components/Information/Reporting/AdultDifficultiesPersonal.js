import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  REPORTING,
  REPORTING_ADULT,
  REPORTING_ADULT_DIFFICULTIES,
  REPORTING_ADULT_DIFFICULTIES_PERSONAL
} from "../../BreadCrumps";

const InfoSeniorReportingRequestPersonal = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            REPORTING,
            REPORTING_ADULT,
            REPORTING_ADULT_DIFFICULTIES,
            REPORTING_ADULT_DIFFICULTIES_PERSONAL
          ]}
        />
      </div>
      <div className="content final">
        <h1>Vous souhaitez signaler un événement indésirable :</h1>
        <br />
        <p>
          Merci d'envoyer un mail à l'adresse suivante :{" "}
          <a href="mailto:da.signalements@calvados.fr">
            da.signalements@calvados.fr
          </a>
        </p>
        <p>ou</p>
        <p>
          un courrier à l'adresse suivante :<br />
          <br />
          <div style={{ textAlign: "center" }}>
            Direction générale adjointe de la solidarité
            <br />
            Direction de l'autonomie
            <br />
            service coordination animation et prévention
            <br />
            BP10519 14035 Caen Cedex 1
          </div>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorReportingRequestPersonal;
