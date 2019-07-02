import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  REPORTING,
  REPORTING_ADULT,
  REPORTING_ADULT_DIFFICULTIES,
  REPORTING_ADULT_DIFFICULTIES_PRO
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
            REPORTING,
            REPORTING_ADULT,
            REPORTING_ADULT_DIFFICULTIES,
            REPORTING_ADULT_DIFFICULTIES_PRO
          ]}
        />
      </div>
      <div className="content final">
        <h1>Vous souhaitez signaler un événement indésirable :</h1>
        <br />
        <p>
          Informations générales en cliquant sur le lien :{" "}
          <a
            href="https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Autonomie%20%26%20Handicap/Traitement-des-signalements-reclamations-et-evenements-indesirables-Plaquette-pour-professionnels.pdf"
            target="_top"
          >
            Télécharger la plaquette
          </a>
        </p>
        <br />
        <p>
          Merci de répondre au formulaire de signalement ci-dessous :{" "}
          <a
            href="https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Autonomie%20%26%20Handicap/Formulaire-de-signalement-a-destination-du-Departement-du-Calvados.pdf"
            target="_top"
          >
            Formulaire de signalement
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorReportingRequestPro;
