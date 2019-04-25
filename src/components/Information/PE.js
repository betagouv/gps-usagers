import React from "react";
import { Back, Feedback } from "../../components";
import "./Styles.css";

const InfoPE = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content final">
        <h1>Consulter les offres d'emploi :</h1>
        <br />
        <p>
          Sur le site du Département :{" "}
          <a href="https://www.calvados.fr/espace-emploi" target="_top">
            https://www.calvados.fr/espace-emploi
          </a>
        </p>
        <br />
        <p>
          Sur cap territorial :{" "}
          <a href="https://www.cap-territorial.fr/" target="_top">
            https://www.cap-territorial.fr/
          </a>
        </p>
        <br />
        <p>
          Contactez pôle emploi
          <br />
          <br /> Pour joindre Pôle Emploi par téléphone, appelez le numéro
          suivant :
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
