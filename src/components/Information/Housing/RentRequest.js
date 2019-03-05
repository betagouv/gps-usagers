import React from "react";
import { Back } from "../../../components";
import "../Styles.css";

const InfoHousingRentRequest = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content final">
        <h1>Remplissez le formulaire de demande</h1>
        <p> Vous pouvez obtenir le formulaire : </p>
        <p>
          - Sur le site du Département :{" "}
          <a
            href="https://www.calvados.fr/contents/ﬁche/ﬁches-aide--services/aides-ﬁnancieres-a-lacces-a-un.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://www.calvados.fr/contents/ﬁche/ﬁches-aide--services/aides-ﬁnancieres-a-lacces-a-un.html
          </a>
        </p>

        <p>
          - En format papier à l'une des adresses suivantes :
          <div className="infoAddress">
            <h4>
              Direction générale adjointe de la solidarité Fond de solidarité
              logement
            </h4>
            17 avenue Pierre Mendès France
            <br />
            14000 Caen
            <br />
            Merci de vous adresser à l'accueil
          </div>
        </p>
        <p>
          - Dans l'un des centres médicaux-sociaux de votre circonscription
          <br />
          <br />
          <button
            className="button"
            onClick={() => transition("INFO_HOUSING_RENT_REQUEST_CMS")}
          >
            Accèder à la liste des circonscriptions
          </button>
        </p>
      </div>
    </div>
  );
};

export default InfoHousingRentRequest;
