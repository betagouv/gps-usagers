import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_HOMECARE_SERVICES,
  INFO_SENIORS_HOMECARE_SERVICES_ASK
} from "../../BreadCrumps";

const InfoSeniorHomecareAsk = ({ transition, machineState }) => {
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
            INFO_SENIORS_HOMECARE_SERVICES_ASK
          ]}
        />
      </div>
      <div className="content final">
        <h1>Remplissez le formulaire de demande</h1>
        <p> Vous pouvez obtenir le formulaire : </p>
        <p>
          - Sur le site du Département{" "}
          <a
            href="https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Autonomie%20%26%20Handicap/formulaire-de-demande-daide-mena"
            rel="noopener noreferrer"
            target="_blank"
          >
            en cliquant ici
          </a>
        </p>
        - Dans l'un des CCAS (centre communaux d'action sociale) : Rendez-vous
        dans le CCAS de votre mairie
      </div>
    </div>
  );
};

export default InfoSeniorHomecareAsk;
