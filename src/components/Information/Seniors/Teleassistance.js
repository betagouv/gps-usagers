import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { SENIORS, INFO_SENIORS_TELEASSISTANCE } from "../../BreadCrumps";

const InfoSeniorTeleassistance = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, INFO_SENIORS_TELEASSISTANCE]}
        />
      </div>
      <div className="content final" />
    </div>
  );
};

export default InfoSeniorTeleassistance;
