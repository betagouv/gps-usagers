import React from "react";
import { Back, Feedback } from "../../components";
import { RSA, RECIPIENT_RSA, RSA_LETTER, INFO_MSA } from "../BreadCrumps";
import "./Styles.css";

const InfoMSA = ({ transition, machineState }) => {
  const {
    history: { value }
  } = machineState;
  let breadCrumps;
  if (value === "rsaLetter") {
    breadCrumps = [RSA, RECIPIENT_RSA, RSA_LETTER, INFO_MSA];
  } else {
    breadCrumps = [RSA, RECIPIENT_RSA, INFO_MSA];
  }
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={breadCrumps}
        />
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

export default InfoMSA;
