import React from "react";
import { Back, Choice } from "..";
import { FAMILY } from "../BreadCrumps";

const FamilySelection = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY]}
        />
      </div>
      <div className="content">
        <h3>VOTRE DEMANDE CONCERNE :</h3>
        <div className="contentCard">
          <Choice
            label="Devenir assistant familial ou maternel"
            onClick={() => transition("INFO_FAMILY_CHILDMINDER")}
          />
          <Choice
            label="Trouver un mode de garde"
            onClick={() => transition("INFO_FAMILY_CHILDCARE")}
          />
          <Choice
            label="Conseils grossesse et arrivée de mon enfant (allaitement...)"
            onClick={() => transition("INFO_FAMILY_PREGNANCY")}
          />
          <Choice
            label="Consultation/ suivi médical enfant âgé entre 0 et 6 ans (suivi, vaccin....)"
            onClick={() => transition("INFO_FAMILY_MEDICAL")}
          />
          <Choice
            label="Adopter ou parrainer un enfant"
            onClick={() => transition("FAMILY_ADOPTION")}
          />
          <Choice
            label="Contraception, sexualité, vie de couple (difficultés), interruption volontaire de grossesse"
            onClick={() => transition("INFO_FAMILY_COUPLE_LIFE")}
          />
          <Choice
            label="Difficultés éducatives"
            onClick={() => transition("INFO_FAMILY_EDUCATION")}
          />
          <Choice
            label="Accouchement sous le secret"
            onClick={() => transition("INFO_FAMILY_SECRET_CHILDBIRTH")}
          />
          <Choice
            label="Consulter un dossier après avoir été placé à l'aide sociale à l'enfance"
            onClick={() => transition("INFO_FAMILY_WELFARE")}
          />
          <Choice
            label="Création structure de petite enfance"
            onClick={() => transition("INFO_FAMILY_CHILDS_STRUCTURE")}
          />
          <Choice
            label="Information sur le placement d'un enfant"
            onClick={() => transition("INFO_FAMILY_PLACEMENT_CHILD")}
          />
          <Choice
            label="Perte ou obtention de mon carnet de santé"
            onClick={() => transition("INFO_FAMILY_HEALTH_RECORD")}
          />
        </div>
      </div>
    </div>
  );
};

export default FamilySelection;
