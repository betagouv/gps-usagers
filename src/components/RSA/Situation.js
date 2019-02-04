import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Back, Choice } from "../../components";

const RSASituation = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content">
        <h3>
          <FontAwesomeIcon icon={faArrowRight} /> Quelle est votre situation ?
        </h3>
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
  );
};

export default RSASituation;
