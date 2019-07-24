import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  FAMILY,
  FAMILY_ADOPTION,
  FAMILY_ADOPTION_SPONSORSHIP
} from "../../BreadCrumps";

const InfoFamilySponsorship = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_ADOPTION, FAMILY_ADOPTION_SPONSORSHIP]}
        />
      </div>
      <div className="content final">
        <h1>Contactez le gestionnaire du dossier</h1>
        <p>
        Informations générales sur le parrainage : <br/><br/>
          <button
            className="button"
            onClick={() =>
              window.open(
                "https://www.calvados.fr/accueil/le-departement/solidarite---familles/enfance--familles/parrainage-14.html",
                "_blank"
              )
            }
          >
            Accéder au site
          </button>
        </p><br/>
        <p>
          Numéro de téléphone du gestionnaire de dossier :
          <h2 className="phoneList">
            <a href="tel:0231571657" target="_top">
              02 31 57 16 57
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoFamilySponsorship;
