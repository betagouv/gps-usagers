import React from "react";
import { Back, Choice } from "..";
import { FAMILY, FAMILY_ADOPTION } from "../BreadCrumps";

const FamilyAdoption = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_ADOPTION]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="Adoption"
            onClick={() => transition("INFO_FAMILY_ADOPTION_ADOPTION")}
          />
          <Choice
            label="Parrainage"
            onClick={() => transition("INFO_FAMILY_ADOPTION_SPONSORSHIP")}
          />
        </div>
      </div>
    </div>
  );
};

export default FamilyAdoption;
