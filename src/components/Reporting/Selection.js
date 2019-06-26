import React from "react";
import { Back, Choice } from "..";
import { REPORTING } from "../BreadCrumps";

const ReportingSelection = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[REPORTING]}
        />
      </div>
      <div className="content">
        <h3>Effectuer un signalement relatif à une personne :</h3>
        <div className="contentCard">
          <Choice
            label="Mineure"
            onClick={() => transition("INFO_REPORTING_MINOR")}
          />
          <Choice
            label="Majeure"
            onClick={() => transition("REPORTING_ADULT")}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportingSelection;
