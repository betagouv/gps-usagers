import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { FAMILY, INFO_FAMILY_HEALTH_RECORD } from "../../BreadCrumps";

const InfoFamilyWelfare = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, INFO_FAMILY_HEALTH_RECORD]}
        />
      </div>
      <div className="content final">
        <h1>
          Contactez le gestionnaire de dossier pour avoir des renseignements
        </h1>
        <p>
          Numéro de téléphone du gestionnaire de dossier :
          <h2 className="phoneList">
            <a href="tel:0231571757" target="_top">
              02 31 57 17 57
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoFamilyWelfare;
