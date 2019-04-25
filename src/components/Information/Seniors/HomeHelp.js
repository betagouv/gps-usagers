import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { SENIORS, INFO_SENIORS_HOME_HELP } from "../../BreadCrumps";

const InfoSeniorHomeHelp = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, INFO_SENIORS_HOME_HELP]}
        />
      </div>
      <div className="content final">
        <h1>
          Rechercher le service d'aide à domicile qui intervient dans votre
          ville ou commune
        </h1>
      </div>
    </div>
  );
};

export default InfoSeniorHomeHelp;
