import React from "react";
import { Back, Choice } from "..";
import { SENIORS } from "../BreadCrumps";

const SeniorsSelection = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="Aides à domicile"
            onClick={() => transition("SENIORS_HOME_HELP")}
          />
          <Choice
            label="Accueil familial pour les personnes âgées"
            onClick={() => transition("SENIORS_FAMILY_HOME")}
          />
          <Choice
            label="Service d'aide à domicile (SAD)"
            onClick={() => transition("INFO_SENIORS_HOME_HELP")}
          />
          <Choice
            label="Téléassistance"
            onClick={() => transition("SENIORS_TELEASSISTANCE")}
          />
          <Choice
            label="Successions"
            onClick={() => transition("SENIORS_SUCCESSION")}
          />
          <Choice
            label="Obligation alimentaire"
            onClick={() => transition("SENIORS_MAINTENANCE_OBLIGATION")}
          />
          <Choice
            label="Informations et prévention personnes âgées"
            onClick={() => transition("INFO_SENIORS_INFORMATIONS")}
          />
          <Choice
            label="Etablissements pour personnes âgées dépendantes (EHPAD)"
            onClick={() => transition("SENIORS_EHPAD")}
          />
          <Choice
            label="Signalement et réclamation"
            onClick={() => transition("SENIORS_REPORTING")}
          />
          <Choice
            label="Conférence des financeurs"
            onClick={() => transition("INFO_SENIORS_FINANCIERS_MEETING")}
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorsSelection;
