import React from "react";
import { Back, Choice } from "../../components";
import { HOUSING } from "../BreadCrumps";

const HousingSelection = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HOUSING]}
        />
      </div>
      <div className="content">
        <h3>Quelle est de votre demande ?</h3>
        <Choice
          label="Rechercher un logement social ou un logement privé"
          onClick={() => transition("INFO_HOUSING_SEARCH")}
        />
        <Choice
          label="Aides financières pour l'accès à un logement : information et/ou demander une aide financière"
          onClick={() => transition("HOUSING_ASSISTANCE")}
        />
        <Choice
          label="Difficultés pour régler mon loyer"
          onClick={() => transition("HOUSING_RENT")}
        />
        <Choice
          label="Aide pour l’acquisition, la construction, ou l'amélioration de mon logement"
          onClick={() => transition("HOUSING_ACQUISITION")}
        />
        <Choice
          label="Aide pour régler mes factures d'énergie"
          onClick={() => transition("INFO_HOUSING_ENERGY_BILLS")}
        />
      </div>
    </div>
  );
};

export default HousingSelection;
