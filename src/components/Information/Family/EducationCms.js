import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { FAMILY, FAMILY_EDUCATION } from "../../BreadCrumps";
import MapCms from "../../MapCms";

const InfoFamilyEducationCms = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_EDUCATION]}
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

export default InfoFamilyEducationCms;
