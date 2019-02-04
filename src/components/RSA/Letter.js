import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Back, Choice } from "../../components";

const RSALetter = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content">
        <h3>
          <FontAwesomeIcon icon={faArrowRight} /> Qui vous a envoyé ce courrier
          ?
        </h3>
        <Choice
          label="Le département du Calvados"
          onClick={() => transition("INFO_GESTIONNAIRE")}
        />
        <Choice label="La CAF" onClick={() => transition("INFO_CAF")} />
        <Choice label="La MSA" onClick={() => transition("INFO_MSA")} />
      </div>
    </div>
  );
};

export default RSALetter;
