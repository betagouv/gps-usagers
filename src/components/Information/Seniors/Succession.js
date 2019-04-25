import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { SENIORS, INFO_SENIORS_SUCCESSION } from "../../BreadCrumps";

const InfoSeniorSuccession = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, INFO_SENIORS_SUCCESSION]}
        />
      </div>
      <div className="content final">
        <h1>
          Contactez le gestionnaire suivant pour obtenir un renseignement :
        </h1>
        <p>
          <h2 className="phoneList">
            <a href="tel:0231571612" target="_top">
              02 31 57 16 12
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorSuccession;
