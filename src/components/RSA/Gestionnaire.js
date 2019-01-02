import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Back } from "../../components";

const RSAGestionnaire = ({ transition }) => {
  return (
    <div className="Container">
      <div className="Header">
        <Back transition={transition} />
      </div>
      <div className="Content">
        <h3>
          <FontAwesomeIcon icon={faArrowRight} /> Quelle est votre adresse ?
        </h3>
        <input className="InputText" type="text" />
      </div>
    </div>
  );
};

export default RSAGestionnaire;
