import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_REPORTING,
  SENIORS_REPORTING_REQUEST_PERSONAL
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
            SENIORS,
            SENIORS_REPORTING,
            SENIORS_REPORTING_REQUEST_PERSONAL
          ]}
        />
      </div>
      <div className="content final">
        <h1>Vous souhaitez signaler un événement indésirable :</h1>
        Merci d'envoyer :
        <p>
          un mail à l'adresse suivante{" "}
          <a href="mailto:signalements@calvados.fr">signalements@calvados.fr</a>
        </p>
        <br />
        <p>
          ou un courrier à l'adresse suivante :<br />
          <br />
          <div style={{ textAlign: "center" }}>
            Direction générale adjointe de la solidarité
            <br />
            Direction de l'autonomie
            <br />
            service coordination animation et prévention
            <br />
            BP10519 BP 14035 Caen Cedex 1
          </div>
        </p>
        <br />
        <p>
          Vous pouvez également joindre le numéro suivant{" "}
          <a href="tel:0231571725" target="_top">
            02 31 57 17 25
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorReportingRequestPersonal;
