import React from "react";
import { Back } from "../../components";

const RSAGestionnaire = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content">
        <h3>Quelle est votre adresse ?</h3>
        <div className="contentCard">
          <input className="inputText" type="text" />
        </div>
      </div>
    </div>
  );
};

export default RSAGestionnaire;
