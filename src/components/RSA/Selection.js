import React from "react";
import { Back, Choice } from "../../components";
import { RSA, RECIPIENT_RSA } from "../BreadCrumps";

const RSASelection = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[RSA, RECIPIENT_RSA]}
        />
      </div>
      <div className="content">
        <h3>Votre demande concerne :</h3>
        <div className="contentCard">
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
            onClick={() => transition("RSA_SITUATION")}
          />
          <Choice
            label="Je souhaite avoir une aide financière supplémentaire"
            onClick={() => transition("INFO_CMS")}
          />
          <Choice
            label="J'ai besoin d'un suivi pour remplir des démarches administratives"
            onClick={() => transition("INFO_CMS")}
          />
          <Choice
            label="Je souhaite bénéficier de la CMU (Couverture Maladie Universelle)"
            onClick={() => transition("INFO_CPAM")}
          />
        </div>
      </div>
    </div>
  );
};

export default RSASelection;
