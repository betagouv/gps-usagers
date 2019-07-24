import React from "react";
import { Back, Choice } from "..";
import { SENIORS, SENIORS_FAMILY_HOME } from "../BreadCrumps";

const SeniorsInstitutions = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_FAMILY_HOME]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="Informations générales"
            onClick={() => transition("INFO_SENIORS_FAMILY_HOME_INFOS")}
          />
          <Choice
            label="Devenir accueillant"
            onClick={() => transition("INFO_SENIORS_FAMILY_HOME_REQUEST")}
          />
          {/* <Choice
            label="Démarches pour bénéficier d’un accueil familial"
            onClick={() => transition("INFO_SENIORS_FAMILY_HOME_REQUEST")}
          /> */}
          <Choice
            label="Avancement de mon dossier d'aide sociale"
            onClick={() => transition("INFO_SENIORS_FAMILY_HOME_TRACKING")}
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorsInstitutions;
