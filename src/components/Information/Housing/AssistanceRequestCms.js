import React from "react";
import { Back } from "../..";
import MapCms from "../../MapCms";
import "../Styles.css";

const InfoHousingAssistanceRequestCms = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <MapCms />
    </div>
  );
};

export default InfoHousingAssistanceRequestCms;
