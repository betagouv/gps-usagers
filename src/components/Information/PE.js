import React from "react";
import { Back } from "../../components";
import "./Styles.css";

const InfoPE = ({ transition }) => {
  return (
    <div className="Container Info">
      <div className="Header">
        <Back transition={transition} />
      </div>
      <div className="Content">
        <h1>Contactez Pôle Emploi</h1>
        <p>
          Pour joindre Pôle Emploi par téléphone, appelez le numéro suivant :
          <h2 className="Phone">39 49</h2>
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
