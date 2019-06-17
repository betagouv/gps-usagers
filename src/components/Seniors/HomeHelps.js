import React from "react";
import { Back, Choice } from "..";
import { SENIORS, SENIORS_HOME_HELP } from "../BreadCrumps";

const SeniorsHomeHelp = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_HOME_HELP]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="Aide ménagère"
            onClick={() => transition("SENIORS_HOMECARE_SERVICES")}
          />
          <Choice
            label="Allocation personnalisée à l'autonomie (APA)"
            onClick={() => transition("SENIORS_AUTONOMY")}
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorsHomeHelp;
