import React from "react";
import { Back } from "../../components";
import "./Styles.css";

const InfoCirconscription = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content final">
        <h1>Contactez la Mutualité sociale agricole (MSA)</h1>
        Rendez-vous sur votre compte MSA :
        <p>
          <button
            className="button"
            onClick={() =>
              window.open(
                "https://monespaceprive.msa.fr/lfy/web/msa/accueil?modalId=2",
                "_blank"
              )
            }
          >
            Accèder à votre compte
          </button>
        </p>
        <br />
        <p>
          Pour joindre la MSA par téléphone, appelez le numéro suivant :
          <h2 className="phone">
            <a href="tel:+33231253939" target="_top">
              02 31 25 39 39
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoCirconscription;
