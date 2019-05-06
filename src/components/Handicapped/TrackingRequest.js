import React from "react";
import { Back, Choice } from "..";
import { HANDICAPPED, HANDICAPPED_TRACKING_REQUEST } from "../BreadCrumps";

const HandicappedTrackingRequest = ({ transition, machineState }) => {
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
        <h3>Votre demande concerne :</h3>
        <div className="contentCard">
          <Choice
            label="Je souhaite savoir si ma demande ou mes documents ont bien été réceptionnés"
            onClick={() => transition("INFO_HANDICAPPED_TRACKING_REQUEST")}
          />
          <Choice
            label="Je souhaite savoir si ma demande est bien complète ou l'évolution de celui-ci"
            onClick={() => transition("INFO_HANDICAPPED_TRACKING_REQUEST")}
          />
          <Choice
            label="Je rencontre des difficultés pour déposer ma demande"
            onClick={() => transition("HANDICAPPED_TRACKING_REQUEST_HELP")}
          />
          <Choice
            label="Je rencontre des difficultés financières"
            onClick={() =>
              transition("INFO_HANDICAPPED_TRACKING_REQUEST_FINANCIAL")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HandicappedTrackingRequest;
