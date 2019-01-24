import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Back } from "../../components";

const RSAGestionnaire = ({ transition }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} />
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
