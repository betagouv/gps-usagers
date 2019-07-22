import React, { Component } from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { SENIORS, INFO_SENIORS_HOME_HELP } from "../../BreadCrumps";

class InfoSeniorHomeHelp extends Component {
  render() {
    const { transition, machineState } = this.props;

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
          <h1>Rechercher les services d'aide à domicile près de chez vous</h1>
          <button
            className="button"
            onClick={() => transition("INFO_SENIORS_HOME_HELP_SAD")}
          >
            Rechercher un service d'aide à domicile
          </button>
          <h1>Informations complémentaires et/ou transmission liste SAD</h1>
          <button
            className="button"
            onClick={() => transition("INFO_SENIORS_HOME_HELP_CLIC")}
          >
            Contacter un centre local d'information et de coordination
          </button>
        </div>
      </div>
    );
  }
}

export default InfoSeniorHomeHelp;
