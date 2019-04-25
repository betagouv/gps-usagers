import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_AUTONOMY,
  INFO_SENIORS_APA_HELP_REQUEST
} from "../../BreadCrumps";

const InfoSeniorHelpRequest = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            SENIORS,
            SENIORS_AUTONOMY,
            INFO_SENIORS_APA_HELP_REQUEST
          ]}
        />
      </div>
      <div className="content final">
        <h1>Vous pouvez formuler votre demande d'APA en ligne :</h1>
        <p>
          en cliquant sur le lien suivant :{" "}
          <a href="https://teleservices.calvados.fr/" target="_top">
            https://teleservices.calvados.fr/
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorHelpRequest;
