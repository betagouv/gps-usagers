import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { FAMILY, FAMILY_PLACEMENT_CHILD } from "../../BreadCrumps";
import MapCms from "../../MapCms";

const InfoFamilyPlacementChildCms = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_PLACEMENT_CHILD]}
        />
      </div>
      <div className="content final">
        <h3>
          Sélectionnez votre circonscription afin d'être orienté vers le bon
          interlocuteur
        </h3>
        <MapCms />
      </div>
    </div>
  );
};

export default InfoFamilyPlacementChildCms;
