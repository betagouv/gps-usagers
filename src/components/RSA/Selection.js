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
            label="Question suite à un courrier reçu"
            onClick={() => transition("RSA_LETTER")}
          />
          <Choice
            label="Actualisation de mon RSA"
            onClick={() => transition("INFO_CAF")}
          />
          <Choice
            label="Problème dernier versement"
            onClick={() => transition("RSA_SITUATION")}
          />
          <Choice
            label="Informations aides financières"
            onClick={() => transition("INFO_CMS")}
          />
          <Choice
            label="Problème pour remplir des démarches administratives"
            onClick={() => transition("INFO_CMS")}
          />
          <Choice
            label="CMU (Couverture maladie universelle)"
            onClick={() => transition("INFO_CPAM")}
          />
        </div>
      </div>
    </div>
  );
};

export default RSASelection;
