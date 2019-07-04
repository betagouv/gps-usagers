import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { FAMILY, FAMILY_PLACEMENT_CHILD } from "../../BreadCrumps";
import MapCms from "../../MapCms";

const InfoFamilyPlacementChild = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[FAMILY, FAMILY_PLACEMENT_CHILD]}
        />
      </div>
      <div className="content final">
        <h1>Obtenir une information</h1>
        <p>
          Vous avez reçu un courrier ?<br />
          <span>
            Référer vous aux coordonnées mentionnés sur le courrier reçu en haut
            à gauche
          </span>
        </p>
        <p>
          Vous n'avez pas reçu de courrier ?<br />
          <MapCms />
        </p>
      </div>
    </div>
  );
};

export default InfoFamilyPlacementChild;
