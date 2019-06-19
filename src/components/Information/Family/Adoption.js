import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  FAMILY,
  FAMILY_ADOPTION,
  FAMILY_ADOPTION_ADOPTION
} from "../../BreadCrumps";

const InfoFamilyAdoption = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_ADOPTION, FAMILY_ADOPTION_ADOPTION]}
        />
      </div>
      <div className="content final">
        <h1> </h1>
        <p />
      </div>
    </div>
  );
};

export default InfoFamilyAdoption;
