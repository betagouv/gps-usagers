import React from "react";
import { Back, Choice } from "..";
import {
  SENIORS,
  SENIORS_REPORTING,
  SENIORS_REPORTING_REQUEST
} from "../BreadCrumps";

const SeniorsReportingRequest = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_REPORTING, SENIORS_REPORTING_REQUEST]}
        />
      </div>
      <div className="content">
        <h3>Vous êtes ? :</h3>
        <div className="contentCard">
          <Choice
            label="Un particulier"
            onClick={() =>
              transition("INFO_SENIORS_REPORTING_REQUEST_PERSONAL")
            }
          />
          <Choice
            label="Un professionnel"
            onClick={() => transition("INFO_SENIORS_REPORTING_REQUEST_PRO")}
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorsReportingRequest;
