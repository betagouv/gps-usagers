import React from "react";
import { Back } from "../../components";
import "./Styles.css";

const InfoCirconscription = ({ transition }) => {
  return (
    <div className="container info">
      <div className="header">
        <Back transition={transition} />
      </div>
      <div className="content">
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
          <h2 className="phone">02 31 25 39 39</h2>
        </p>
      </div>
    </div>
  );
};

export default InfoCirconscription;
