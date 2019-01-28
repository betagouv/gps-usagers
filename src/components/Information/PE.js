import React from "react";
import { Back } from "../../components";
import "./Styles.css";

const InfoPE = ({ transition }) => {
  return (
    <div className="container final">
      <div className="header">
        <Back transition={transition} />
      </div>
      <div className="content">
        <h1>Contactez Pôle emploi</h1>
        <p>
          Pour joindre le pôle emploi par téléphone, appelez le numéro suivant :
          <h2 className="phone">39 49</h2>
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
