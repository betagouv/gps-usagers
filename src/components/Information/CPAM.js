import React from "react";
import { Back } from "../../components";
import "./Styles.css";

const InfoCPAM = ({ transition }) => {
  return (
    <div className="Container Info">
      <div className="Header">
        <Back transition={transition} />
      </div>
      <div className="Content">
        <h1>Contactez l'Assurance Maladie</h1>
        Vous pouvez obtenir plus de renseignements sur le site de l'Assurance
        Maladie :
        <p>
          <button
            className="Button"
            onClick={() =>
              (window.location.href =
                "https://www.ameli.fr/paris/assure/adresses-et-contacts/laide-pour-une-complementaire-sante-cmuc/acs/obtenir-la-cmuc-ou-lacs")
            }
          >
            Accèder au site
          </button>
        </p>
        <br />
        <p>
          Si vous souhaitez joindre l'Assurance Maladie, vous pouvez également
          contacter le :
          <h2 className="Phone">
            3646 <span>(6 cts / minute + prix appel)</span>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoCPAM;
