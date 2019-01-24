import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Choice, Back } from "../../components";

const RSASituation = ({ transition }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} />
      </div>
      <div className="content">
        <h3>
          <FontAwesomeIcon icon={faArrowRight} /> Quelle est votre situation ?
        </h3>
        <Choice label="Étudiants" onClick={() => transition("INFO_EPN")} />
        <Choice
          label="Travailleurs indépendants"
          onClick={() => transition("INFO_EPN")}
        />
        <Choice
          label="Ressortissants étrangers"
          onClick={() => transition("INFO_EPN")}
        />
        <Choice label="Autre" onClick={() => transition("INFO_CAF")} />
      </div>
    </div>
  );
};

export default RSASituation;
