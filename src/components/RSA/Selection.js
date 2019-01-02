import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Choice, Back } from "../../components";

const RSASelection = ({ transition }) => {
  return (
    <div className="Container">
      <div className="Header">
        <Back transition={transition} />
      </div>
      <div className="Content">
        <h3>
          <FontAwesomeIcon icon={faArrowRight} /> Quel est l’object de votre
          demande ?
        </h3>
        <Choice
          label="J'ai reçu un courrier et j'ai une question"
          onClick={() => transition("RSA_LETTER")}
        />
        <Choice
          label="J'ai besoin d'actualiser mon RSA"
          onClick={() => transition("INFO_CAF")}
        />
        <Choice
          label="Je n'ai pas reçu mon dernier versement ou mon dernier versement est
          inférieur à mon allocation habituelle"
          onClick={() => transition("INFO_CAF")}
        />
        <Choice
          label="Je souhaite avoir une aide financière supplémentaire"
          onClick={() => transition("RSA_CIRCONSCRIPTION")}
        />
        <Choice
          label="J'ai besoin d'un suivi pour remplir des démarches administratives"
          onClick={() => transition("RSA_CIRCONSCRIPTION")}
        />
        <Choice
          label="Je souhaite bénéficier de la CMU"
          onClick={() => transition("INFO_CPAM")}
        />
      </div>
    </div>
  );
};

export default RSASelection;
