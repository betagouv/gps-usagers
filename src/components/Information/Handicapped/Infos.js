import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { HANDICAPPED, HANDICAPPED_INFOS } from "../../BreadCrumps";

const InfoHandicappedInfos = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HANDICAPPED, HANDICAPPED_INFOS]}
        />
      </div>
      <div className="content final">
        <h1>Des informations générales sont à votre disposition sur le site</h1>
        <p>
          en cliquant sur le lien suivant :{" "}
          <a href="https://www.calvados.fr/mdph" target="_top">
            https://www.calvados.fr/mdph
          </a>
        </p>
        <p>
          Vous pouvez contacter l'accueillant-instructeur de votre dossier :
        </p>
      </div>
    </div>
  );
};

export default InfoHandicappedInfos;
