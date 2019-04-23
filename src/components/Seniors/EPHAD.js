import React from "react";
import { Back, Choice } from "..";
import { SENIORS, SENIORS_INSTITUTIONS } from "../BreadCrumps";

const SeniorsInstitutions = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_INSTITUTIONS]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="Aides financières et/ou techniques (demande ou fermeture)"
            onClick={() => transition("SENIORS_FINANCIAL_AID")}
          />
          <Choice
            label="Hébergement"
            onClick={() => transition("SENIORS_ACCOMMODATION")}
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorsInstitutions;
