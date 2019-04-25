import React from "react";
import { Back, Choice } from "..";
import {
  HANDICAPPED,
  HANDICAPPED_TRACKING_REQUEST,
  HANDICAPPED_TRACKING_REQUEST_HELP
} from "../BreadCrumps";

const HandicappedRequest = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            HANDICAPPED,
            HANDICAPPED_TRACKING_REQUEST,
            HANDICAPPED_TRACKING_REQUEST_HELP
          ]}
        />
      </div>
      <div className="content">
        <h3>Les difficultés rencontrées concernent :</h3>
        <div className="contentCard">
          <Choice
            label="Une demande papier (que vous avez téléchargé ou imprimé Cerfa MDPH)"
            onClick={() =>
              transition("INFO_HANDICAPPED_TRACKING_REQUEST_HELP_FILE")
            }
          />
          <Choice
            label="Une demande déposé en ligne"
            onClick={() =>
              transition("INFO_HANDICAPPED_TRACKING_REQUEST_HELP_ONLINE")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HandicappedRequest;
