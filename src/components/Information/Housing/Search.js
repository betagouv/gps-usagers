import React from "react";
import { Back } from "../../../components";
import "../Styles.css";

const InfoHousingSearch = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content final">
        <h1>Contactez la maison de l'habitat</h1>
        <p>
          Si vous souhaitez joindre quelqu'un par téléphone, appelez le numéro
          suivant :
          <h2 className="phone">
            <a href="tel:0231383138" target="_top">
              02 31 38 31 38
            </a>
          </h2>
        </p>
        <br />
        <p>
          Vous pouvez également vous rendre à la Maison de l'Habitat à l'adresse
          suivante :
          <div className="infoAddress">
            16 rue Rosa Parks
            <br /> 14000 CAEN
          </div>
        </p>
      </div>
    </div>
  );
};

export default InfoHousingSearch;
