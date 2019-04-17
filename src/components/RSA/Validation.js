import React from "react";
import { Back, Card } from "../../components";
import { RSA } from "../BreadCrumps";

const RSASelection = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[RSA]}
        />
      </div>
      <div className="content">
        <h3>Êtes vous déjà allocataire du RSA ?</h3>
        <div className="contentCard">
          <Card
            label="OUI"
            icon="done"
            color="#48b95f"
            onClick={() => transition("RSA_TRUE")}
            className="checkTrue"
          />
          <Card
            label="NON"
            icon="clear"
            color="#e73f57"
            onClick={() => transition("RSA_FALSE")}
            className="checkFalse"
          />
        </div>
      </div>
    </div>
  );
};

export default RSASelection;
