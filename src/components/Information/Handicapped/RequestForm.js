import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  HANDICAPPED,
  HANDICAPPED_REQUEST,
  HANDICAPPED_REQUEST_FORM
} from "../../BreadCrumps";

const InfoHandicappedInfos = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            HANDICAPPED,
            HANDICAPPED_REQUEST,
            HANDICAPPED_REQUEST_FORM
          ]}
        />
      </div>
      <div className="content final" />
    </div>
  );
};

export default InfoHandicappedInfos;
