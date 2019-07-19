import React, { Component } from "react";
import { Back, Feedback } from "../../../components";
import {
  HANDICAPPED,
  HANDICAPPED_REQUEST,
  HANDICAPPED_REQUEST_FORM
} from "../../BreadCrumps";

import "../Styles.css";

export default class InfoHandicappedRequestForm extends Component {
  render() {
    const { transition, machineState } = this.props;

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
              HANDICAPPED_REQUEST_FORM
            ]}
          />
        </div>
        <div className="content final">
          <h1>Vous pouvez compléter le formulaire :</h1>
          <p>
            En ligne :{" "}
            <a href="https://mdphenligne.cnsa.fr/" target="_top">
              https://mdphenligne.cnsa.fr/
            </a>
            <br />
            <a
              href="https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Autonomie%20%26%20Handicap/MDPH-en-ligne-Manuel-utilisateur-a-destination-des-usagers.pdf"
              target="_top"
            >
              MDPH en ligne - Manuel utilisateur à destination des usagers
            </a>
          </p>
          <p>
            En le téléchargeant sur le site du Département du Calvados : <br />
            <a
              href="https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Autonomie%20%26%20Handicap/MDPH-formulaire-demande.pdf"
              target="_top"
            >
              Formulaire de demande MDPH
            </a>
            <br />
            <a
              href="https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Autonomie%20%26%20Handicap/MDPH_certificat_m%C3%A9dical.pdf"
              target="_top"
            >
              Certificat médical MDPH
            </a>
            <br />
            <a
              href="https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Autonomie%20%26%20Handicap/Comprendre-et-bien-remplir-le-certificat-medical-MDPH.pdf"
              target="_top"
            >
              Comprendre et bien remplir le certificat médical de la MDPH
            </a>
            <br />
            <a
              href="https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Autonomie%20%26%20Handicap/annexe-certificat-medical-MDPH-volet-1-bilan-auditif.pdf"
              target="_top"
            >
              Annexe certificat médical volet 1 - Bilan auditif
            </a>
            <br />
            <a
              href="https://www.calvados.fr/files/live/sites/calvados/files/documents/Le%20D%C3%A9partement/Solidarit%C3%A9%20%26%20famille/Autonomie%20%26%20Handicap/annexe-certificat-medical-MDPH-volet-2-bilan-ophtalmologique.pdf"
              target="_top"
            >
              Annexe certificat médical - volet 2 - Bilan ophtalomologique
            </a>
          </p>
          <p>
            En sollicitant un envoi papier du formulaire ou venant le chercher :
          </p>
          <button
            className="button"
            onClick={() => transition("INFO_HANDICAPPED_REQUEST_FORM_CMS")}
          >
            Accèder à la liste des circonscriptions d'action sociale
          </button>
        </div>
      </div>
    );
  }
}
