import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Back, Choice } from "../../components";

const HousingRent = ({ transition, machineState }) => {
  return (
    <div className="container">
      <div className="header">
        <Back transition={transition} machineState={machineState} />
      </div>
      <div className="content">
        <h3>
          <FontAwesomeIcon icon={faArrowRight} /> Votre demande concerne :
        </h3>
        <Choice
          label="Je souhaite avoir des informations générales sur les aides ﬁnancières"
          onClick={() => transition("INFO_HOUSING_RENT")}
        />
        <Choice
          label="L'obtention du formulaire papier pour effectuer une demande"
          onClick={() => transition("INFO_HOUSING_RENT_REQUEST")}
        />
        <Choice
          label="La sollicitation d'un accompagnement pour remplir le formulaire"
          onClick={() => transition("INFO_HOUSING_RENT_HELP")}
        />
      </div>
    </div>
  );
};

export default HousingRent;
