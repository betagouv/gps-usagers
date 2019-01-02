import React from "react";
import { Back } from "../../components";
import "./Styles.css";

const InfoCirconscription = ({ transition }) => {
  return (
    <div className="Container Info">
      <div className="Header">
        <Back transition={transition} />
      </div>
      <div className="Content">
        <h1>Contactez la Mutualité sociale agricole (MSA)</h1>
        Rendez-vous sur votre compte MSA :
        <p>
          <button
            className="Button"
            onClick={() =>
              (window.location.href =
                "https://monespaceprive.msa.fr/lfy/web/msa/accueil?modalId=2")
            }
          >
            Accèder à votre compte
          </button>
        </p>
        <br />
        <p>
          Pour joindre la MSA par téléphone, appelez le numéro suivant :
          <h2 className="Phone">02 31 25 39 39</h2>
        </p>
      </div>
    </div>
  );
};

export default InfoCirconscription;
