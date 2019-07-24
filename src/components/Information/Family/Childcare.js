import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { FAMILY, FAMILY_CHILDCARE } from "../../BreadCrumps";

const InfoFamilyChildcare = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_CHILDCARE]}
        />
      </div>
      <div className="content final">
        <h1>Rechercher un mode de garde</h1>
        <p>
          - Contacter une assistante maternelle :<br />
          <br />
          <button
            className="button"
            onClick={() =>
              window.open(
                "https://www.calvados.fr/contents/fiche/fiches-aide--services/trouver-une-assistante-maternell.html",
                "_blank"
              )
            }
          >
            Trouver une Assistante Maternelle
          </button>
        </p>
        <br />
        <p>
          - Trouver un mode d'accueil sur le site de la Caf :<br />
          <br />
          <button
            className="button"
            onClick={() =>
              window.open(
                "https://mon-enfant.fr/trouver-un-mode-d-accueil",
                "_blank"
              )
            }
          >
            Accéder au site
          </button>
        </p>
      </div>
    </div>
  );
};

export default InfoFamilyChildcare;
