import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { FAMILY, FAMILY_COUPLE_LIFE } from "../../BreadCrumps";

const InfoFamilyCoupleLife = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_COUPLE_LIFE]}
        />
      </div>
      <div className="content final">
        <h1>
          Joindre le centre de planification et d'éducation familiale (CPEF)
        </h1>
        <p>
          <br />
          <button
            className="button"
            onClick={() =>
              window.open(
                "https://www.calvados.fr/accueil/annuaire-pratique/carte-des-cpef.html",
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

export default InfoFamilyCoupleLife;
