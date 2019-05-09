import React from "react";
import { Back, Choice } from "../../components";
import { RSA, RECIPIENT_RSA, RSA_SITUATION } from "../BreadCrumps";

const RSASituation = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[RSA, RECIPIENT_RSA, RSA_SITUATION]}
        />
      </div>
      <div className="content">
        <h3>Quelle est votre situation ?</h3>
        <div className="contentCard">
          <Choice
            label="Étudiants"
            onClick={() => transition("INFO_GESTIONNAIRE")}
          />
          <Choice
            label="Travailleurs indépendants"
            onClick={() => transition("INFO_GESTIONNAIRE")}
          />
          <Choice
            label="Ressortissants étrangers"
            onClick={() => transition("INFO_GESTIONNAIRE")}
          />
          <Choice label="Autre" onClick={() => transition("INFO_CAF")} />
        </div>
      </div>
    </div>
  );
};

export default RSASituation;
