import React from "react";
import { Back, Choice } from "../../components";
import { RSA, NON_RECIPIENT_RSA } from "../BreadCrumps";

const RSAOther = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[RSA, NON_RECIPIENT_RSA]}
        />
      </div>
      <div className="content">
        <h3>Quelle est votre demande ?</h3>
        <div className="contentCard">
          <Choice
            label="Rechercher un emploi"
            onClick={() => transition("INFO_PE")}
          />
          <Choice
            label="Aide pour actualiser mon RSA"
            onClick={() => transition("INFO_EPN")}
          />
          <Choice
            label="Suis-je éligible et combien je toucherais ?"
            onClick={() => transition("INFO_CAF_ONLINE")}
          />
          <Choice
            label="Obtenir des informations générales sur le RSA"
            onClick={() => transition("INFO_ONLINE")}
          />
        </div>
      </div>
    </div>
  );
};

export default RSAOther;
