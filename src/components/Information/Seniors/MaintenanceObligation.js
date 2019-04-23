import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  INFO_SENIORS_MAINTENANCE_OBLIGATION
} from "../../BreadCrumps";

const InfoSeniorMAintenaceObligation = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, INFO_SENIORS_MAINTENANCE_OBLIGATION]}
        />
      </div>
      <div className="content final" />
    </div>
  );
};

export default InfoSeniorMAintenaceObligation;
