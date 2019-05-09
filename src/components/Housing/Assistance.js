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
          label="Je souhaite avoir des informations générales sur les aides ﬁnancières"
          onClick={() => transition("INFO_HOUSING_ASSISTANCE")}
        />
        <Choice
          label="Je souhaite formuler une demande d'aide ﬁnancière"
          onClick={() => transition("INFO_HOUSING_ASSISTANCE_REQUEST")}
        />
        <Choice
          label="Je souhaite être accompagné pour remplir le formulaire"
          onClick={() => transition("INFO_HOUSING_ASSISTANCE_HELP")}
        />
      </div>
    </div>
  );
};

export default HousingAssistance;
