import React from "react";
import { Back, Choice } from "..";
import { HANDICAPPED } from "../BreadCrumps";

const HandicappedSelection = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HANDICAPPED]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="Informations générales"
            onClick={() => transition("INFO_HANDICAPPED_INFOS")}
          />
          <Choice
            label="Déposer un dossier"
            onClick={() => transition("HANDICAPPED_REQUEST")}
          />
          <Choice
            label="Renseignements sur le dossier que j'ai déposé"
            onClick={() => transition("HANDICAPPED_TRACKING_REQUEST")}
          />
          <Choice
            label="Informations sur le paiement suite à l’obtention d'un accord"
            onClick={() => transition("HANDICAPPED_PAYMENT")}
          />
          <Choice
            label="Accueil familial pour personnes handicapées"
            onClick={() => transition("HANDICAPPED_FAMILY_HOME")}
          />
          <Choice
            label="Transports adaptés au bénéfice des élèves handicapés"
            onClick={() => transition("HANDICAPPED_TRANSPORT")}
          />
          <Choice
            label="Difficultés financières"
            onClick={() => transition("HANDICAPPED_FINANCIAL")}
          />
        </div>
      </div>
    </div>
  );
};

export default HandicappedSelection;
