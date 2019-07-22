import React from "react";
import { Back, Feedback } from "../../../components";
import MapCms from "../../MapCms";
import "../Styles.css";
import { HOUSING, INFO_CMS } from "../../BreadCrumps";

const InfoHousingEnergyBills = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[HOUSING, INFO_CMS]}
        />
      </div>
      <div className="content final">
        <h3>Contactez votre service d'accueil social</h3>
        <MapCms />
        <br />
        <h3>
          Ou rendez-vous dans l'un des CCAS (centres communaux d'action sociale)
          de votre mairie
        </h3>
      </div>
    </div>
  );
};

export default InfoHousingEnergyBills;
