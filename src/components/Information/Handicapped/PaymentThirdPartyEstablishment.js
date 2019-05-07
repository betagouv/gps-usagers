import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  HANDICAPPED,
  HANDICAPPED_PAYMENT,
  HANDICAPPED_PAYMENT_THIRD_PARTY,
  INFO_HANDICAPPED_PAYMENT_THIRD_PARTY_ESTABLISHMENT
} from "../../BreadCrumps";

const InfoHandicappedThirdPartyHome = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            HANDICAPPED,
            HANDICAPPED_PAYMENT,
            HANDICAPPED_PAYMENT_THIRD_PARTY,
            INFO_HANDICAPPED_PAYMENT_THIRD_PARTY_ESTABLISHMENT
          ]}
        />
      </div>
      <div className="content final">
        <h1>Contactez le gestionnaire pour obtenir un renseignement : </h1>
        <p>
          Numéro de téléphone du gestionnaire de dossier
          <h2 className="phoneList">
            <a href="tel:0231571718" target="_top">
              02 31 57 17 18
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoHandicappedThirdPartyHome;
