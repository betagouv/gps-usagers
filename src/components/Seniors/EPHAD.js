import React from "react";
import { Back, Choice } from "..";
import { SENIORS, SENIORS_EHPAD } from "../BreadCrumps";

const SeniorsEPHAD = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_EHPAD]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="Liste des EHPAD "
            onClick={() => transition("INFO_SENIORS_EHPAD_LIST")}
          />
          <Choice
            label="Demande d'hébergement en EHPAD"
            onClick={() => transition("INFO_SENIORS_EHPAD_REQUEST")}
          />
          <Choice
            label="Demande accompagnement pour mes démarches en ligne"
            onClick={() => transition("INFO_SENIORS_EHPAD_HELP_REQUEST")}
          />
          <Choice
            label="Dysfonctionnement de Via trajectoire lors de ma saisie en ligne"
            onClick={() => transition("INFO_SENIORS_EHPAD_HELP_ONLINE")}
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorsEPHAD;
