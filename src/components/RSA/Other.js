import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Choice, Back } from "../../components";

const RSAOther = ({ transition }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} />
      </div>
      <div className="content">
        <h3>
          <FontAwesomeIcon icon={faArrowRight} /> Quel est l’object de votre
          demande ?
        </h3>
        <Choice
          label="Je cherche un emploi"
          onClick={() => transition("INFO_PE")}
        />
        <Choice
          label="J'ai besoin d'aide pour remplir ma demande de RSA"
          onClick={() => transition("INFO_EPN")}
        />
        <Choice
          label="Je veux savoir si je suis éligible et combien je toucherais"
          onClick={() => transition("INFO_CAF_ONLINE")}
        />
        <Choice
          label="Je veux avoir des informations générales sur le RSA"
          onClick={() => transition("INFO_ONLINE")}
        />
      </div>
    </div>
  );
};

export default RSAOther;
