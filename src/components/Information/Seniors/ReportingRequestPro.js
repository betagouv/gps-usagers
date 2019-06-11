import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_REPORTING,
  SENIORS_REPORTING_REQUEST_PRO
} from "../../BreadCrumps";

const InfoSeniorReportingRequestPro = ({ transition, machineState }) => {
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
            SENIORS_REPORTING_REQUEST_PRO
          ]}
        />
      </div>
      <div className="content final">
        <h1>Vous souhaitez signaler un événement indésirable :</h1>
        Merci de répondre au formulaire ci-dessous <br />
        <a
          href="https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Autonomie%20%26%20Handicap/Formulaire-de-signalement-a-destination-du-Departement-du-Calvados.pdf"
          target="_top"
        >
          Formulaire de signalement
        </a>
        <p />
        <br />
        <p>
          Ou d'envoyer un mail à l'adresse suivante :
          <a href="mailto:da.signalements@calvados.fr">
            da.signalements@calvados.fr
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorReportingRequestPro;
