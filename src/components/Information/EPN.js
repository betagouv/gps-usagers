import React from "react";
import { Back } from "../../components";
import "./Styles.css";

const InfoEPN = ({ transition }) => {
  return (
    <div className="Container Info">
      <div className="Header">
        <Back transition={transition} />
      </div>
      <div className="Content">
        <h1>Rendez-vous dans l'EPN ou le Point Info le plus proche</h1>
      </div>
    </div>
  );
};

export default InfoEPN;
