import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { FAMILY, FAMILY_EDUCATION } from "../../BreadCrumps";

const InfoFamilyEducation = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_EDUCATION]}
        />
      </div>
      <div className="content final">
        <h1>Vous pouvez bénéficier de conseils</h1>
        <p>
          - En vous rapprochant de la circonscription ou du centre médico-social
          le plus proche de chez vous
          <br />
          <br />
          <button
            className="button"
            onClick={() => transition("INFO_FAMILY_EDUCATION_CMS")}
          >
            Accèder à la liste des circonscriptions
          </button>
        </p>
        <br />
        <p>
          En vous rapprochant de la protection maternelle et infantile (PMI) :{" "}
          <br />
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

export default InfoFamilyEducation;
