import React from "react";
import { Back, Feedback } from "../../../components";
import MapCms from "../../MapCms";
import "../Styles.css";
import { HOUSING, INFO_CMS } from "../../BreadCrumps";

const InfoHousingEnergyBills = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HOUSING, INFO_CMS]}
        />
      </div>
      <MapCms />
    </div>
  );
};

export default InfoHousingEnergyBills;
