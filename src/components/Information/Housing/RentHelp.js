import React from "react";
import { Back, Feedback } from "../../../components";
import MapCms from "../../MapCms";
import "../Styles.css";

const InfoHousingRentHelp = ({ transition, machineState }) => {
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

export default InfoHousingRentHelp;
