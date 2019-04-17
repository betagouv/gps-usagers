import React from "react";
import { Back, Choice } from "../../components";
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
            label="Maintien à domicile"
            onClick={() => transition("SENIORS_HOMECARE_SERVICES")}
          />
          <Choice
            label="Établissements"
            onClick={() => transition("SENIORS_INSTITUTIONS")}
          />
          <Choice
            label="Signalements / réclamations"
            onClick={() => transition("SENIORS_REPORTING")}
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorsSelection;
