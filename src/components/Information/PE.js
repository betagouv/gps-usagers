import React from "react";
import { Back } from "../../components";
import "./Styles.css";

const InfoPE = ({ transition }) => {
  return (
    <div className="Container Info">
      <div className="Header">
        <Back transition={transition} />
      </div>
      <div className="Content">
        <h1>Contactez Pôle emploi</h1>
        <p>
          Appelez le numéro suivant :<h2 className="Phone">02 31 25 39 39</h2>
        </p>
      </div>
    </div>
  );
};

export default InfoPE;
