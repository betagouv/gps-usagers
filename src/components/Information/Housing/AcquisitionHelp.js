import React from "react";
import { Back } from "../../../components";
import "../Styles.css";

const InfoHousingAcquisitionHelp = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content final">
        <h1>Remplissez le formulaire de demande</h1>
        <p> Vous pouvez obtenir le formulaire : </p>
        <p>
          - A domicile par voie postale en sollicitant auprès d'un des
          gestionnaires aux numéros suivants :
          <h2 className="phoneList">
            <a href="tel:0231571274" target="_top">
              02 31 57 12 74
            </a>
            <br />
            <a href="tel:0231571273" target="_top">
              02 31 57 12 73
            </a>
            <br />
            <a href="tel:0231571270" target="_top">
              02 31 57 12 70
            </a>
          </h2>
        </p>
        <p>
          - En format papier à l'adresse suivante :
          <div className="infoAddress">
            <h4>
              Direction générale adjointe de la solidarité Fond de solidarité
              logement
            </h4>
            17 avenue Pierre Mendès France
            <br />
            14000 Caen
            <br />
            Merci de vous adresser à l'accueil
          </div>
        </p>
      </div>
    </div>
  );
};

export default InfoHousingAcquisitionHelp;
