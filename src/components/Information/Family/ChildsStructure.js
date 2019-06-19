import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { FAMILY, FAMILY_CHILDS_STRUCTURE } from "../../BreadCrumps";

const InfoFamilyChildsStructure = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_CHILDS_STRUCTURE]}
        />
      </div>
      <div className="content final">
        <h1>
          Contactez le gestionnaire de dossier pour avoir des renseignements
        </h1>
        <p>
          Numéro de téléphone du gestionnaire de dossier :
          <h2 className="phoneList">
            <a href="tel:0231571765" target="_top">
              02 31 57 17 65
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoFamilyChildsStructure;
