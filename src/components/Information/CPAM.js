import React from "react";
import { Back, Feedback } from "../../components";
import { RSA, RECIPIENT_RSA, INFO_CPAM } from "../BreadCrumps";
import "./Styles.css";

const InfoCPAM = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[RSA, RECIPIENT_RSA, INFO_CPAM]}
        />
      </div>
      <div className="content final">
        <h1>Contactez l'Assurance Maladie</h1>
        Vous pouvez obtenir plus de renseignements sur le site de l'Assurance
        Maladie :
        <p>
          <button
            className="button"
            onClick={() =>
              window.open(
                "https://www.ameli.fr/paris/assure/adresses-et-contacts/laide-pour-une-complementaire-sante-cmuc/acs/obtenir-la-cmuc-ou-lacs",
                "_blank"
              )
            }
          >
            Accéder au site
          </button>
        </p>
        <br />
        <p>
          Si vous souhaitez joindre l'Assurance Maladie, vous pouvez également
          contacter le :
          <h2 className="phone">
            <a href="tel:3646" target="_top">
              3646
            </a>{" "}
            <span>(6 cts / minute + prix appel)</span>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoCPAM;
