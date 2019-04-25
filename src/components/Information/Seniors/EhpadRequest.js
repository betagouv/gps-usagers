import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_EHPAD,
  INFO_SENIORS_EHPAD_REQUEST
} from "../../BreadCrumps";

const InfoSeniorsEhpadRequest = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_EHPAD, INFO_SENIORS_EHPAD_REQUEST]}
        />
      </div>
      <div className="content final">
        <h1>
          Vous pouvez rechercher un EHPAD ou en effectuer la demande sur Via
          trajectoire :
        </h1>
        <p>
          en cliquant sur le lien suivant :{" "}
          <a
            href="https://trajectoire.sante-ra.fr/GrandAge/Pages/Public/Accueil.aspx"
            target="_top"
          >
            https://trajectoire.sante-ra.fr/GrandAge/Pages/Public/Accueil.aspx
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorsEhpadRequest;
