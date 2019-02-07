import React from "react";
import { Back } from "../../components";
import "./Styles.css";

const InfoCAFOnline = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content final">
        <h1>
          Utilisez le simulateur de la Caisse d'Allocations Familiales (CAF)
        </h1>
        La CAF possède un simulateur vous permettant si vous êtes éligibles au
        RSA et pour quel montant :
        <p>
          <button
            className="button"
            onClick={() =>
              window.open(
                "http://www.caf.fr/allocataires/mes-services-en-ligne/estimer-vos-droits/simulation-rsa",
                "_blank"
              )
            }
          >
            Simulateur de la CAF
          </button>
        </p>
        <br />
        <p>
          Pour joindre la CAF par téléphone, appelez le numéro suivant :
          <h2 className="phone">
            <a href="tel:+33810251410">0810 25 14 10</a>{" "}
            <span>(6cts / minute + prix de l'appel)</span>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoCAFOnline;
