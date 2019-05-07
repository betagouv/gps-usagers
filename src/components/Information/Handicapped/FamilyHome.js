import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { HANDICAPPED, INFO_HANDICAPPED_FAMILY_HOME } from "../../BreadCrumps";

const InfoHandicappedFamilyHome = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HANDICAPPED, INFO_HANDICAPPED_FAMILY_HOME]}
        />
      </div>
      <div className="content final">
        <h1>Contactez le gestionnaire pour obtenir un renseignement : </h1>
        <p>
          Numéro de téléphone du gestionnaire de dossier
          <h2 className="phoneList">
            <a href="tel:0231571635" target="_top">
              02 31 57 16 35
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoHandicappedFamilyHome;