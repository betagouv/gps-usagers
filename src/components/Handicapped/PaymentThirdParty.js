import React from "react";
import { Back, Choice } from "..";
import {
  HANDICAPPED,
  HANDICAPPED_PAYMENT,
  HANDICAPPED_PAYMENT_THIRD_PARTY
} from "../BreadCrumps";

const HandicappedThirdParty = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            HANDICAPPED,
            HANDICAPPED_PAYMENT,
            HANDICAPPED_PAYMENT_THIRD_PARTY
          ]}
        />
      </div>
      <div className="content">
        <h3>Il s'agit d'une demande d'aide sociale :</h3>
        <div className="contentCard">
          <Choice
            label="Maintien à domicile"
            onClick={() =>
              transition("INFO_HANDICAPPED_PAYMENT_THIRD_PARTY_HOME")
            }
          />
          <Choice
            label="En établissement"
            onClick={() =>
              transition("INFO_HANDICAPPED_PAYMENT_THIRD_PARTY_ESTABLISHMENT")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HandicappedThirdParty;
