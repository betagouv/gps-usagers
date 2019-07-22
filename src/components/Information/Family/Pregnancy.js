import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { FAMILY, FAMILY_PREGNANCY } from "../../BreadCrumps";

const InfoFamilyPregnancy = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_PREGNANCY]}
        />
      </div>
      <div className="content final">
        <h1>Vous pouvez bénéficier de conseils</h1>
        <p>
          - En vous rapprochant de la circonscription d'action sociale ou du
          centre médico-social le plus proche de chez vous
          <br />
          <br />
          <button
            className="button"
            onClick={() => transition("INFO_FAMILY_PREGNANCY_CMS")}
          >
            Accèder à la liste des circonscriptions d'action sociale
          </button>
        </p>
        <br />
        <p>
          - En vous rapprochant de la protection maternelle et infantile (PMI)
          ou de son bus itinérant : <br />
          <br />
          <button
            className="button"
            onClick={() =>
              window.open(
                "https://www.calvados.fr/accueil/annuaire-pratique/carte-des-pmi.html",
                "_blank"
              )
            }
          >
            Accèder au site
          </button>
        </p>
      </div>
    </div>
  );
};

export default InfoFamilyPregnancy;
