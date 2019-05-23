import React from "react";
import { Back, Feedback } from "../../../components";
import MapCms from "../../MapCms";
import "../Styles.css";
import { HOUSING, INFO_CMS } from "../../BreadCrumps";

const InfoHousingRentRequestCms = ({ transition, machineState }) => {
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
      <div className="content final">
      <MapCms />
      </div>
    </div>
  );
};

export default InfoHousingRentRequestCms;
