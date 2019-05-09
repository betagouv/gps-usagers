import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  HOUSING,
  HOUSING_ACQUISITION,
  HOUSING_ACQUISITION_SELECTION,
  INFO_HOUSING_ACQUISITION_INFOS
} from "../../BreadCrumps";

const InfoHousingAcquisitionInfos = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            HOUSING,
            HOUSING_ACQUISITION,
            HOUSING_ACQUISITION_SELECTION,
            INFO_HOUSING_ACQUISITION_INFOS
          ]}
        />
      </div>
      <div className="content final">
        <h1>
          Contactez l'un des gestionnaires de dossier pour avoir des
          renseignements
        </h1>
        <p>
          Numéros de téléphone direct des gestionnaires de dossier :
          <h2 className="phoneList">
            <a href="tel:0231571274" target="_top">
              02 31 57 12 74
            </a>
            <br />
            <a href="tel:0231571273" target="_top">
              02 31 57 12 73
            </a>
            <br />
            <a href="tel:0231571270" target="_top">
              02 31 57 12 70
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoHousingAcquisitionInfos;
