import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { SENIORS, SENIORS_AUTONOMY, INFO_SENIORS_APA } from "../../BreadCrumps";

const InfoSeniorApa = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_AUTONOMY, INFO_SENIORS_APA]}
        />
      </div>
      <div className="content final" />
    </div>
  );
};

export default InfoSeniorApa;
