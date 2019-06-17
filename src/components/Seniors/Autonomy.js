import React from "react";
import { Back, Choice } from "..";
import { SENIORS, SENIORS_HOME_HELP, SENIORS_AUTONOMY } from "../BreadCrumps";

const SeniorsInstitutions = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_HOME_HELP, SENIORS_AUTONOMY]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="Informations générales sur l'APA"
            onClick={() => transition("INFO_SENIORS_APA")}
          />
          <Choice
            label="Création d'une demande d'APA"
            onClick={() => transition("INFO_SENIORS_APA_REQUEST")}
          />
          <Choice
            label="Demande d'accompagnement pour mes démarches en ligne"
            onClick={() => transition("INFO_SENIORS_APA_HELP_REQUEST")}
          />
          <Choice
            label="Dysfonctionnement lors de ma saisie en ligne"
            onClick={() => transition("INFO_SENIORS_APA_HELP_ONLINE")}
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorsInstitutions;
