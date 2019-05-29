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
      <div className="content final">
        <MapCms />
        <br />
        <h3>
          Ou rendez-vous dans l'un des CCAS (centres communaux d'action sociale)
          de votre mairie
        </h3>
      </div>
    </div>
  );
};

export default InfoHousingAssistanceHelp;
