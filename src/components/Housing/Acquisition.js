import React from "react";
import { Back, Choice } from "../../components";
import { HOUSING, HOUSING_ACQUISITION } from "../BreadCrumps";

const HousingAcquisition = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HOUSING, HOUSING_ACQUISITION]}
        />
      </div>
      <div className="content">
        <h3>Quelle est votre situation ?</h3>
        <Choice
          label="Difficultés remboursement de mon prêt acquisition logement"
          onClick={() => transition("HOUSING_ACQUISITION_SELECTION")}
        />
        <Choice
          label="Propriétaire privé : aide pour réhabiliter un logement en vue de le louer"
          onClick={() => transition("HOUSING_ACQUISITION_SELECTION")}
        />
        <Choice
          label="Aide pour rénover ou améliorer mon logement (habitation principale)"
          onClick={() => transition("HOUSING_ACQUISITION_SELECTION")}
        />
        <Choice
          label="Aide pour construction ou acquisition de mon logement"
          onClick={() => transition("HOUSING_ACQUISITION_SELECTION")}
        />
      </div>
    </div>
  );
};

export default HousingAcquisition;
