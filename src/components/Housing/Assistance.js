import React from "react";
import { Back, Choice } from "../../components";
import { HOUSING, HOUSING_ASSISTANCE } from "../BreadCrumps";

const HousingAssistance = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HOUSING, HOUSING_ASSISTANCE]}
        />
      </div>
      <div className="content">
        <h3>Votre demande concerne :</h3>
        <Choice
          label="Informations générales sur les aides financières"
          onClick={() => transition("INFO_HOUSING_ASSISTANCE")}
        />
        <Choice
          label="Demande d'aide financière"
          onClick={() => transition("INFO_HOUSING_ASSISTANCE_REQUEST")}
        />
        <Choice
          label="Accompagnement pour remplir le formulaire"
          onClick={() => transition("INFO_HOUSING_ASSISTANCE_HELP")}
        />
      </div>
    </div>
  );
};

export default HousingAssistance;
