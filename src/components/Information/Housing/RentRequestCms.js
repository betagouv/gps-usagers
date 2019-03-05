import React from "react";
import { Back } from "../../../components";
import MapCms from "../../MapCms";
import "../Styles.css";

const InfoHousingRentRequestCms = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <MapCms />
    </div>
  );
};

export default InfoHousingRentRequestCms;
