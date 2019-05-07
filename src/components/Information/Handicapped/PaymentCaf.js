import React from "react";
import { Back, Feedback } from "../../../components";
import "../Styles.css";
import {
  HANDICAPPED,
  HANDICAPPED_PAYMENT,
  INFO_HANDICAPPED_PAYMENT_CAF
} from "../../BreadCrumps";

const InfoHandicappedPchCaf = ({ transition, machineState }) => {
  return (
    <div className="container">
      <Feedback />
      <div className="header">
        <Back
          transition={transition}
          machineState={machineState}
          breadCrumps={[
            HANDICAPPED,
            HANDICAPPED_PAYMENT,
            INFO_HANDICAPPED_PAYMENT_CAF
          ]}
        />
      </div>
      <div className="content final">
        <h1>Contactez la Caisse d'Allocations Familiales (CAF)</h1>
        Rendez-vous sur votre CAF :
        <p>
          <a
            href="http://www.caf.fr/allocataires/droits-et-prestations/connaitre-vos-droits-selon-votre-situation/je-suis-dans-une-situation-de-handicap"
            rel="noopener noreferrer"
            target="_blank"
          >
            http://www.caf.fr/allocataires/droits-et-prestations/connaitre-vos-droits-selon-votre-situation/je-suis-dans-une-situation-de-handicap
          </a>
        </p>
        <br />
        <p>
          Pour joindre la CAF par téléphone, appelez le numéro suivant :
          <h2 className="phone">
            <a href="tel:+33810251410" target="_top">
              0810 25 14 10
            </a>{" "}
            <span>(6cts / minute + prix de l'appel)</span>
          </h2>
        </p>
        <p>
          Vous pouvez également retrouver la liste des points d'accueil CAF sur
          cette{" "}
          <a
            href="https://www.caf.fr/allocataires/caf-du-calvados/points-d-accueil"
            rel="noopener noreferrer"
            target="_blank"
          >
            cette page
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default InfoHandicappedPchCaf;
