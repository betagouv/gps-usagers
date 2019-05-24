import React from "react";
import { Back, Choice } from "../../components";
import { RSA, RECIPIENT_RSA, RSA_LETTER } from "../BreadCrumps";

const RSALetter = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[RSA, RECIPIENT_RSA, RSA_LETTER]}
        />
      </div>
      <div className="content">
        <h3>Qui vous a envoyé ce courrier ?</h3>
        <div className="contentCard">
          <Choice
            label="Le département du Calvados"
            onClick={() => transition("INFO_GESTIONNAIRE")}
          />
          <Choice label="La CAF" onClick={() => transition("INFO_CAF")} />
          <Choice label="La MSA" onClick={() => transition("INFO_MSA")} />
          <Choice
            label="Les CCAS centre communaux d'action sociale"
            onClick={() => transition("INFO_CCAS")}
          />
        </div>
      </div>
    </div>
  );
};

export default RSALetter;
