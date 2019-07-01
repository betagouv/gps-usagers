import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { REPORTING, REPORTING_MINOR } from "../../BreadCrumps";

const InfoReportingMinor = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[REPORTING, REPORTING_MINOR]}
        />
      </div>
      <div className="content final">
        <h1>Comment alerter ? :</h1>
        <p>
          - Alerter en appelant l'un des contacts :
          <h2>
            <a href="tel:119" target="_top">
              119
            </a>
          </h2>
        </p>
        <p>
          - Cellule départementale de recueil d'informations préoccupantes
          (CRIP) :
          <h2>
            <a href="tel:0250224224" target="_top">
              02 50 22 42 24
            </a>
          </h2>
        </p>
        <p>
          - Par un courrier à :
          <div className="infoAddress">
            <h4>
              Direction de l'enfance et familles <br />
              Cellule de recueil d' informations préoccupantes (CRIP)
            </h4>
            BP 10519
            <br />
            14035 Caen Cedex 1
          </div>
        </p>
        <h1>Informez sur la présence d'un mineur isolé étranger :</h1>
        <p>
          - Appelez le :
          <h2>
            <a href="tel:0250224041" target="_top">
              02 50 22 40 41
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoReportingMinor;
