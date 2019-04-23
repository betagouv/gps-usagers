import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_EHPAD,
  INFO_SENIORS_EHPAD_REQUEST
} from "../../BreadCrumps";

const InfoSeniorsEhpadRequest = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_EHPAD, INFO_SENIORS_EHPAD_REQUEST]}
        />
      </div>
      <div className="content final" />
    </div>
  );
};

export default InfoSeniorsEhpadRequest;
