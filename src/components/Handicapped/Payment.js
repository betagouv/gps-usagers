import React from "react";
import { Back, Choice } from "..";
import { HANDICAPPED, HANDICAPPED_PAYMENT } from "../BreadCrumps";

const HandicappedPayment = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HANDICAPPED, HANDICAPPED_PAYMENT]}
        />
      </div>
      <div className="content">
        <h3>Votre demande concerne :</h3>
        <div className="contentCard">
          <Choice
            label="Le paiement de la prestation de compensation du handicap (PCH) ou son arrêt"
            onClick={() => transition("HANDICAPPED_PAYMENT_PCH")}
          />
          <Choice
            label="Le paiement de l'allocation compensatrice pour tierce personne ou son arrêt"
            onClick={() => transition("HANDICAPPED_PAYMENT_THIRD_PARTY")}
          />
          <Choice
            label="Le paiement de l'allocation adulte handicapée (AAH) ou son arrêt"
            onClick={() => transition("INFO_HANDICAPPED_PAYMENT_CAF")}
          />
          <Choice
            label="Le paiement de l’allocation d'éducation de l'enfant handicapé (AEEH) ou son arrêt"
            onClick={() => transition("INFO_HANDICAPPED_PAYMENT_CAF")}
          />
        </div>
      </div>
    </div>
  );
};

export default HandicappedPayment;
