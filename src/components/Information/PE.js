import React from "react";
import { Back } from "../../components";
import "./Styles.css";

const InfoPE = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content final">
        <h1>Contactez Pôle Emploi</h1>
        <p>
          Pour joindre Pôle Emploi par téléphone, appelez le numéro suivant :
          <h2 className="Phone">
            <a href="tel:3949" target="_top">
              39 49
            </a>
          </h2>
        </p>
        <br />
        <p>
          Vous pouvez obtenir plus de renseignements sur leur site :
          <a
            href="https://www.pole-emploi.fr/accueil/"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://www.pole-emploi.fr/accueil/
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoPE;
