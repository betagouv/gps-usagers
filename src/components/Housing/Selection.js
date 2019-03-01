import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Back, Choice } from "../../components";

const HousingSelection = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content">
        <h3>
          <FontAwesomeIcon icon={faArrowRight} /> Quel est l’objet de votre
          demande ?
        </h3>
        <Choice
          label="Je suis à la recherche d'un logement social ou d'un logement privé"
          onClick={() => transition("INFO_HOUSING_SEARCH")}
        />
        <Choice
          label="Je souhaite avoir des renseignements sur une aide ﬁnancière pour l'accès à un logement ou effectuer une demande d'aide ﬁnancière"
          onClick={() => transition("HOUSING_ASSISTANCE")}
        />
        <Choice
          label="Je rencontre des difﬁcultés pour régler mon loyer"
          onClick={() => transition("HOUSING_RENT")}
        />
        <Choice
          label="Je souhaite bénéﬁcier d'une aide pour l'acquisition, la construction ou l’amélioration de mon logement"
          onClick={() => transition("HOUSING_ACQUISITION")}
        />
        <Choice
          label="Je souhaite bénéﬁcier d'une aide pour régler mes factures d'énergie"
          onClick={() => transition("INFO_HOUSING_ENERGY_BILLS")}
        />
      </div>
    </div>
  );
};

export default HousingSelection;
