import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Back } from "../../components";

const RSAGestionnaire = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content">
        <h3>
          <FontAwesomeIcon icon={faArrowRight} /> Quelle est votre adresse ?
        </h3>
        <input className="inputText" type="text" />
      </div>
    </div>
  );
};

export default RSAGestionnaire;
