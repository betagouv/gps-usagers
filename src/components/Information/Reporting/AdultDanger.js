import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { REPORTING, REPORTING_MINOR } from "../../BreadCrumps";

const InfoReportingAdultDanger = ({ transition, machineState }) => {
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
        <h1>Contactez l'un des numéros suivants pour :</h1>
        <p>
          - Violence conjugale appeler le :
          <h2 className="phoneList">
            <a href="tel:3919" target="_top">
              3919
            </a>{" "}
            <span>(numéro gratuit et anonyme)</span>
            <br />
            <a href="tel:115" target="_top">
              115
            </a>{" "}
            <span>(n° gratuit)</span>
          </h2>
        </p>
        <p>
          - Dérives sectaires, appeler l'un des numéros suivants :
          <h2 className="phoneList">
            <a href="tel:0951818996" target="_top">
              09 51 81 89 96
            </a>
            <br />
            <a href="tel:0683892051" target="_top">
              06 83 89 20 51
            </a>
          </h2>
        </p>
        <p>
          - Appeler la police ou gendarmerie de votre secteur ou de permanence
          ou le 112.
        </p>
        <p>
          - Numéro d'appel des urgences en Europe :
          <h2>
            <a href="tel:112" target="_top">
              112
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoReportingAdultDanger;
