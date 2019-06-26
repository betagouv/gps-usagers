import React from "react";
import { Back, Choice } from "..";
import { REPORTING, REPORTING_ADULT } from "../BreadCrumps";

const ReportingAdult = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[REPORTING, REPORTING_ADULT]}
        />
      </div>
      <div className="content">
        <h3>Effectuer un signalement relatif à une personne :</h3>
        <div className="contentCard">
          <Choice
            label="Personnes en danger"
            onClick={() => transition("INFO_REPORTING_ADULT_DANGER")}
          />
          <Choice
            label="Mécontentements/difficultés avec un établissement ou service (EHPAD/SAD)"
            onClick={() => transition("REPORTING_ADULT_DIFFICULTIES")}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportingAdult;
