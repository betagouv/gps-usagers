import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTimes,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { Card, Back } from "../../components";

const RSASelection = ({ transition }) => {
  return (
    <div className="Container">
      <div className="Header">
        <Back transition={transition} />
      </div>
      <div className="Content">
        <h3>
          <FontAwesomeIcon icon={faArrowRight} /> Êtes-vous déjà allocataire du
          RSA?{" "}
        </h3>
        <Card
          label="OUI"
          icon={faCheck}
          onClick={() => transition("RSA_TRUE")}
          className="CheckTrue"
        />
        <Card
          label="NON"
          icon={faTimes}
          onClick={() => transition("RSA_FALSE")}
          className="CheckFalse"
        />
      </div>
    </div>
  );
};

export default RSASelection;
