import React from "react";
import { Back } from "../../components";
import "./Styles.css";

const InfoCPAM = ({ transition, machineState }) => {
  return (
    <div className="container final">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content">
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
            Accèder au site
          </button>
        </p>
        <br />
        <p>
          Si vous souhaitez joindre l'Assurance Maladie, vous pouvez également
          contacter le :
          <h2 className="phone">
            3646 <span>(6 cts / minute + prix appel)</span>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoCPAM;
