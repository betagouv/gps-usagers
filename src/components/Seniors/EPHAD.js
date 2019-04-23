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
            onClick={() => transition("SENIORS_FINANCIAL_AID")}
          />
          <Choice
            label="Demande d'hébergement en EHPAD"
            onClick={() => transition("SENIORS_ACCOMMODATION")}
          />
          <Choice
            label="Demande accompagnement pour mes démarches en ligne"
            onClick={() => transition("SENIORS_ACCOMMODATION")}
          />
          <Choice
            label="Dysfonctionnement de Via trajectoire lors de ma saisie en ligne"
            onClick={() => transition("SENIORS_ACCOMMODATION")}
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorsEPHAD;
