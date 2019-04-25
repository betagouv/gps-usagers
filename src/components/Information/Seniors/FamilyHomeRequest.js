import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_FAMILY_HOME,
  INFO_SENIORS_FAMILY_HOME_REQUEST
} from "../../BreadCrumps";

const InfoSeniorFamilyHomeRequest = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            SENIORS,
            SENIORS_FAMILY_HOME,
            INFO_SENIORS_FAMILY_HOME_REQUEST
          ]}
        />
      </div>
      <div className="content final">
        <h1>Vous pouvez contacter le gestionnaire suivant :</h1>
        <p>
          <h2 className="phoneList">
            <a href="tel:0231571635" target="_top">
              02 31 57 16 35
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorFamilyHomeRequest;
