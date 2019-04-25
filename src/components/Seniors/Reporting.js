import React from "react";
import { Back, Choice } from "..";
import { SENIORS, SENIORS_REPORTING } from "../BreadCrumps";

const SeniorsReporting = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_REPORTING]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="Informations sur le traitement des signalements, réclamations et événements indésirables"
            onClick={() => transition("INFO_SENIORS_REPORTING_INFO")}
          />
          <Choice
            label="Effectuer un signalement/ une réclamation"
            onClick={() => transition("SENIORS_REPORTING_REQUEST")}
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorsReporting;
