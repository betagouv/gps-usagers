import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_EHPAD,
  INFO_SENIORS_EHPAD_HELP_REQUEST
} from "../../BreadCrumps";

const InfoSeniorsEhpadHelpRequest = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            SENIORS,
            SENIORS_EHPAD,
            INFO_SENIORS_EHPAD_HELP_REQUEST
          ]}
        />
      </div>
      <div className="content final">
        <h1>
          Rendez-vous dans le point info ou EPN le plus proche de chez vous{" "}
        </h1>
      </div>
    </div>
  );
};

export default InfoSeniorsEhpadHelpRequest;
