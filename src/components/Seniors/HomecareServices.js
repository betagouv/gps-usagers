import React from "react";
import { Back, Choice } from "..";
import { SENIORS, SENIORS_HOMECARE_SERVICES } from "../BreadCrumps";

const SeniorsHomecareServices = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_HOMECARE_SERVICES]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="Demande d'aide ménagère"
            onClick={() => transition("INFO_SENIORS_HOMECARE_SERVICES_ASK")}
          />
          <Choice
            label="Avancement de mon dossier"
            onClick={() =>
              transition("INFO_SENIORS_HOMECARE_SERVICES_DIRECTORY")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorsHomecareServices;
