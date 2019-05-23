import React from "react";
import { Back, Choice } from "../../components";
import { HOUSING, HOUSING_RENT } from "../BreadCrumps";

const HousingRent = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HOUSING, HOUSING_RENT]}
        />
      </div>
      <div className="content">
        <h3>Votre demande concerne :</h3>
        <Choice
          label="Je souhaite avoir des informations générales sur les aides ﬁnancières"
          onClick={() => transition("INFO_HOUSING_RENT")}
        />
        <Choice
          label="L'obtention du formulaire papier pour effectuer une demande"
          onClick={() => transition("INFO_HOUSING_RENT_REQUEST")}
        />
        <Choice
          label="Un accompagnement pour remplir le formulaire"
          onClick={() => transition("INFO_HOUSING_RENT_HELP")}
        />
      </div>
    </div>
  );
};

export default HousingRent;
