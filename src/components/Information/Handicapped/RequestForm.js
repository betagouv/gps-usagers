import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import { Back, Feedback } from "../../../components";
import { MDPHModal } from "../../../components/Modal";
import { MDPH } from "../../../utils/circonscriptions";
import {
  HANDICAPPED,
  HANDICAPPED_REQUEST,
  HANDICAPPED_REQUEST_FORM
} from "../../BreadCrumps";
import { ContexedMap } from "../../MapCirconscription";

import "../Styles.css";

export default class InfoHandicappedRequestForm extends Component {
  state = {
    circoName: null,
    lat: 49.183333,
    lng: -0.35,
    zoom: 9,
    value: ""
  };

  getStyle = (feature, layer) => {
    return {
      color: "#003d7e",
      weight: 1,
      opacity: 0.65
    };
  };

  highlightFeature = e => {
    const layer = e.target;
    const { value } = this.state;
    layer.setStyle({
      weight: 2,
      color: "#003d7e",
      dashArray: "",
      fillOpacity: 0.5
    });
    if (value !== layer.feature.properties.tags.cas) {
      this.setState(() => ({
        circoName: layer.feature.properties.tags.cas,
        value: layer.feature.properties.tags.cas
      }));
    }
  };

  resetHighlight = e => {
    this.refs.geojson.leafletElement.resetStyle(e.target);
    this.setState(() => ({ circoName: null, value: "" }));
  };

  onClick = e => {
    const circoName = e.target.feature.properties.tags.cas;
    e.target.options.showModal(MDPHModal, {
      mdph: MDPH[circoName]
    });
    this.setState(() => ({
      circoName: null
    }));
  };

  onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight,
      click: this.onClick
    });
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const { circoName, zoom } = this.state;
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
            En sollicitant un envoi papier du formulaire ou venant le chercher :
          </p>
          <Map className="map" center={position} zoom={zoom}>
            {circoName && <div className="circoName">{circoName}</div>}
            <TileLayer
              url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
              attribution='<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
            />
            <ContexedMap
              ref="geojson"
              onEachFeature={this.onEachFeature}
              style={this.getStyle}
            />
          </Map>
        </div>
      </div>
    );
  }
}
