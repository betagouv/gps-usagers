import React from "react";
import { Back, Feedback } from "../../../components";
import MapCms from "../../MapCms";
import { HOUSING, HOUSING_ASSISTANCE, INFO_CMS } from "../../BreadCrumps";

const InfoHousingAssistanceHelp = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HOUSING, HOUSING_ASSISTANCE, INFO_CMS]}
        />
      </div>
      <MapCms />
    </div>
  );
};

export default InfoHousingAssistanceHelp;
