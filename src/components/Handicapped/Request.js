import React from "react";
import { Back, Choice } from "..";
import { HANDICAPPED, HANDICAPPED_REQUEST } from "../BreadCrumps";

const HandicappedRequest = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HANDICAPPED, HANDICAPPED_REQUEST]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="L'obtention du formulaire pour en effectuer une demande"
            onClick={() => transition("INFO_HANDICAPPED_REQUEST_FORM")}
          />
          <Choice
            label="La sollicitation d'un accompagnement pour remplir le formulaire"
            onClick={() => transition("INFO_HANDICAPPED_REQUEST_HELP")}
          />
        </div>
      </div>
    </div>
  );
};

export default HandicappedRequest;
