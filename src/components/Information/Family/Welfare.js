import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { FAMILY, FAMILY_WELFARE } from "../../BreadCrumps";

const InfoFamilyWelfare = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_WELFARE]}
        />
      </div>
      <div className="content final">
        <h1>
          Contactez le gestionnaire de dossier pour avoir des renseignements
        </h1>
        <p>
          Numéro de téléphone du gestionnaire de dossier :
          <h2 className="phoneList">
            <a href="tel:0231571790" target="_top">
              02 31 57 17 90
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoFamilyWelfare;
