import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_EHPAD,
  INFO_SENIORS_EHPAD_HELP_ONLINE
} from "../../BreadCrumps";

const InfoSeniorsEhpadOnline = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[SENIORS, SENIORS_EHPAD, INFO_SENIORS_EHPAD_HELP_ONLINE]}
        />
      </div>
      <div className="content final">
        <h1>Contactez le gestionnaire</h1>
        <p>
          <a href="mailto:valerie.david-bellenger@calvados.fr">
            valerie.david-bellenger@calvados.fr
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoSeniorsEhpadOnline;
