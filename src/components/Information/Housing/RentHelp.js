import React from "react";
import { Back, Feedback } from "../../../components";
import MapCms from "../../MapCms";
import "../Styles.css";
import { HOUSING, HOUSING_RENT, INFO_CMS } from "../../BreadCrumps";

const InfoHousingRentHelp = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HOUSING, HOUSING_RENT, INFO_CMS]}
        />
      </div>
      <MapCms />
    </div>
  );
};

export default InfoHousingRentHelp;
