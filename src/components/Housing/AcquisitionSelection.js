import React from "react";
import { Back, Choice } from "../../components";
import {
  HOUSING,
  HOUSING_ACQUISITION,
  HOUSING_ACQUISITION_SELECTION
} from "../BreadCrumps";

const HousingAcquisitionSelection = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            HOUSING,
            HOUSING_ACQUISITION,
            HOUSING_ACQUISITION_SELECTION
          ]}
        />
      </div>
      <div className="content">
        <h3>Quelle est votre situation ?</h3>
        <Choice
          label="Informations générales sur les aides financières"
          onClick={() => transition("INFO_HOUSING_ACQUISITION_INFOS")}
        />
        <Choice
          label="Demander une aide financiere financière"
          onClick={() => transition("INFO_HOUSING_ACQUISITION_HELP")}
        />
      </div>
    </div>
  );
};

export default HousingAcquisitionSelection;
