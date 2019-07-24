import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  HOUSING,
  HOUSING_RENT,
  INFO_HOUSING_RENT_REQUEST
} from "../../BreadCrumps";

const InfoHousingRentRequest = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HOUSING, HOUSING_RENT, INFO_HOUSING_RENT_REQUEST]}
        />
      </div>
      <div className="content final">
        <h1>Obtenir le formulaire de demande</h1>
        <p>
          - Sur le site du Département :{" "}
          <a
            href="https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Aide%20au%20logement/Acces-demande-aide-FSL.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Télécharger le formulaire
          </a>
        </p>

        <p>
          - En format papier à l'une des adresses suivantes :
          <div className="infoAddress">
            <h4>
              Direction générale adjointe de la solidarité Fonds de solidarité
              logement
            </h4>
            17 avenue Pierre Mendès France
            <br />
            14000 Caen
            <br />
            Merci de vous adresser à l'accueil
          </div>
        </p>
        <p>
          - Dans l'un des centres médicaux-sociaux de votre circonscription
          d'action sociale
          <br />
          <br />
          <button
            className="button"
            onClick={() => transition("INFO_HOUSING_RENT_REQUEST_CMS")}
          >
            Accéder à la liste des circonscriptions d'action sociale
          </button>
        </p>
      </div>
    </div>
  );
};

export default InfoHousingRentRequest;
