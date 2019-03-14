import React from "react";
import { Back, Feedback } from "../..";
import MapCms from "../../MapCms";
import "../Styles.css";

const InfoHousingAssistanceRequestCms = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <MapCms />
    </div>
  );
};

export default InfoHousingAssistanceRequestCms;
