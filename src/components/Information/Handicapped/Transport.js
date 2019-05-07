import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { HANDICAPPED, INFO_HANDICAPPED_TRANSPORT } from "../../BreadCrumps";

const InfoHandicappedTransport = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HANDICAPPED, INFO_HANDICAPPED_TRANSPORT]}
        />
      </div>
      <div className="content final">
        <h1>Contactez le gestionnaire pour obtenir un renseignement : </h1>
        <p>
          Numéro de téléphone du gestionnaire de dossier
          <h2 className="phoneList">
            <a href="tel:0231571589" target="_top">
              02 31 57 15 89
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoHandicappedTransport;
