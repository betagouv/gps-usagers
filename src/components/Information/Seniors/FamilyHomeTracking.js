import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_FAMILY_HOME,
  INFO_SENIORS_FAMILY_HOME_TRACKING
} from "../../BreadCrumps";

const InfoSeniorFamilyHomeTracking = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            SENIORS,
            SENIORS_FAMILY_HOME,
            INFO_SENIORS_FAMILY_HOME_TRACKING
          ]}
        />
      </div>
      <div className="content final" />
    </div>
  );
};

export default InfoSeniorFamilyHomeTracking;
