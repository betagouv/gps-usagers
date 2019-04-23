import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_AUTONOMY,
  INFO_SENIORS_APA_REQUEST
} from "../../BreadCrumps";

const InfoSeniorHelpRequest = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_AUTONOMY, INFO_SENIORS_APA_REQUEST]}
        />
      </div>
      <div className="content final" />
    </div>
  );
};

export default InfoSeniorHelpRequest;
