import React from "react";
import { Back, Choice } from "../../components";

const HousingAcquisition = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content">
        <h3>Quelle est votre situation ?</h3>
        <Choice
          label="J'ai des difﬁcultés pour rembourser mon prêt acquisition de mon logement"
          onClick={() => transition("HOUSING_ACQUISITION_SELECTION")}
        />
        <Choice
          label="Je suis un propriétaire privé et je souhaite avoir une aide pour réhabiliter un logement en vue de le louer"
          onClick={() => transition("HOUSING_ACQUISITION_SELECTION")}
        />
        <Choice
          label="Je souhaite obtenir une aide pour rénover ou améliorer mon logement (habitation principale)"
          onClick={() => transition("HOUSING_ACQUISITION_SELECTION")}
        />
        <Choice
          label="Je souhaite avoir une aide pour la construction ou l'acquisition de mon logement"
          onClick={() => transition("HOUSING_ACQUISITION_SELECTION")}
        />
      </div>
    </div>
  );
};

export default HousingAcquisition;
