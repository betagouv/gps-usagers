import React, { Component } from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import { FAMILY, FAMILY_CHILDMINDER } from "../../BreadCrumps";
import MapCms from "../../MapCms";

export default class InfoFamilyChildminder extends Component {
  render() {
    const { transition, machineState } = this.props;
    return (
      <div className="container">
        <Feedback />
        <div className="header">
          <Back
            transition={transition}
            machineState={machineState}
            breadCrumps={[FAMILY, FAMILY_CHILDMINDER]}
          />
        </div>
        <div className="content final">
          <MapCms/>
        </div>
      </div>
    );
  }
}
