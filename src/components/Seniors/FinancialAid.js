import React from "react";
import { Back, Choice } from "..";
import {
  SENIORS,
  SENIORS_INSTITUTIONS,
  SENIORS_FINANCIAL_AID
} from "../BreadCrumps";

const SeniorsFinancialAid = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_INSTITUTIONS, SENIORS_FINANCIAL_AID]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="Allocation personnalisé à l'autonomie (APA) "
            onClick={() => transition("SENIORS_APA")}
          />
          <Choice
            label="Obligation alimentaire"
            onClick={() => transition("SENIORS_MAINTENANCE_OBLIGATION")}
          />
          <Choice
            label="Successions"
            onClick={() => transition("SENIORS_SUCCESSIONS")}
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorsFinancialAid;
