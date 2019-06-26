import React from "react";
import { Back, Choice } from "..";
import {
  REPORTING,
  REPORTING_ADULT,
  REPORTING_ADULT_DIFFICULTIES
} from "../BreadCrumps";

const ReportingAdultDifficulties = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            REPORTING,
            REPORTING_ADULT,
            REPORTING_ADULT_DIFFICULTIES
          ]}
        />
      </div>
      <div className="content">
        <h3>Vous êtes :</h3>
        <div className="contentCard">
          <Choice
            label="Un particulier"
            onClick={() =>
              transition("INFO_REPORTING_ADULT_DIFFICULTIES_PERSONAL")
            }
          />
          <Choice
            label="Un professionnel"
            onClick={() => transition("INFO_REPORTING_ADULT_DIFFICULTIES_PRO")}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportingAdultDifficulties;
