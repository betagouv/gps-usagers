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
          https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Autonomie%20%26%20Handicap/Formulaire-de-signalement-a-destination-du-Departement-du-Calvados.pdf
        </a>
        <p />
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

export default InfoSeniorReportingRequestPro;
