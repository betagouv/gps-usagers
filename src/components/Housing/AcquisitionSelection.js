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
          label="Je souhaite obtenir des informations générales sur les aides ﬁnancières"
          onClick={() => transition("INFO_HOUSING_ACQUISITION_INFOS")}
        />
        <Choice
          label="Je souhaite formuler une demande d'aide ﬁnancière"
          onClick={() => transition("INFO_HOUSING_ACQUISITION_HELP")}
        />
      </div>
    </div>
  );
};

export default HousingAcquisitionSelection;
