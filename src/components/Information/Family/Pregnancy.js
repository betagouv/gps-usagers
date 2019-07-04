import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { FAMILY, FAMILY_PREGNANCY } from "../../BreadCrumps";
import MapCms from "../../MapCms";

const InfoFamilyPregnancy = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_PREGNANCY]}
        />
      </div>
      <div className="content final">
        <h1>Vous pouvez bénéficier de conseils</h1>
        <p>
          <h4>
            En vous rapprochant de la circonscription ou du centre médico-social
            le plus de chez vous
          </h4>
          <MapCms />
        </p>
      </div>
    </div>
  );
};

export default InfoFamilyPregnancy;
