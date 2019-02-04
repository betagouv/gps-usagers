import {
  faArrowRight,
  faCheck,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Back, Card } from "../../components";

const RSASelection = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content">
        <h3>
          <FontAwesomeIcon icon={faArrowRight} /> Êtes-vous déjà allocataire du
          RSA?{" "}
        </h3>
        <Card
          label="OUI"
          icon={faCheck}
          onClick={() => transition("RSA_TRUE")}
          className="checkTrue"
        />
        <Card
          label="NON"
          icon={faTimes}
          onClick={() => transition("RSA_FALSE")}
          className="checkFalse"
        />
      </div>
    </div>
  );
};

export default RSASelection;
