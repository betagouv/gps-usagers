import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  HANDICAPPED,
  HANDICAPPED_REQUEST,
  HANDICAPPED_TRACKING_REQUEST_HELP,
  INFO_HANDICAPPED_TRACKING_REQUEST_HELP_ONLINE
} from "../../BreadCrumps";

const InfoHandicappedTrackingRequestHelpOnline = ({
  transition,
  machineState
}) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            HANDICAPPED,
            HANDICAPPED_REQUEST,
            HANDICAPPED_TRACKING_REQUEST_HELP,
            INFO_HANDICAPPED_TRACKING_REQUEST_HELP_ONLINE
          ]}
        />
      </div>
      <div className="content final">
        <h1>
          Contactez le gestionnaire de dossier pour avoir des renseignements :{" "}
        </h1>
        <p>
          Numéro de téléphone l'un des deux gestionnaires de dossier :
          <h2 className="phoneList">
            <a href="tel:0231571718" target="_top">
              02 31 78 91 93
            </a>
          </h2>
          <h2 className="phoneList">
            <a href="tel:0231571718" target="_top">
              02 31 78 91 94
            </a>
          </h2>
        </p>
      </div>
    </div>
  );
};

export default InfoHandicappedTrackingRequestHelpOnline;
