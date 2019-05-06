import React from "react";
import { Back, Choice } from "..";
import { HANDICAPPED, HANDICAPPED_TRACKING_REQUEST } from "../BreadCrumps";

const HandicappedPch = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HANDICAPPED, HANDICAPPED_TRACKING_REQUEST]}
        />
      </div>
      <div className="content">
        <h3>Il s'agit d'une demande d'aide sociale :</h3>
        <div className="contentCard">
          <Choice
            label="Maintien à domicile"
            onClick={() =>
              transition("INFO_HANDICAPPED_TRACKING_REQUEST_RECEIVE")
            }
          />
          <Choice
            label="En établissement"
            onClick={() =>
              transition("INFO_HANDICAPPED_TRACKING_REQUEST_COMPLETE")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HandicappedPch;
