import React, { Component } from "react";
import ReactPiwik from "react-piwik";
import { Map, TileLayer } from "react-leaflet";
import { Back, Feedback } from "../../components";
import { GestionnaireModal } from "../../components/Modal";
import { CIRCO_PHONE } from "../../utils/circonscriptions";
import {
  RSA,
  RECIPIENT_RSA,
  RSA_LETTER,
  RSA_SITUATION,
  INFO_GESTIONNAIRE,
  INFO_GESTIONNAIRE_CIRCO
} from "../BreadCrumps";
import "./Styles.css";
import { ContexedMap } from "../MapCirconscription";

export default class InfoGestionnaire extends Component {
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
    ReactPiwik.push([
      "trackEvent",
      "infoGestionnaire",
      "circonscription",
      e.target.feature.properties.tags.cas
    ]);
    e.target.options.showModal(GestionnaireModal, {
      circo: CIRCO_PHONE[circoName],
      cms: CIRCO_PHONE[circoName]
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
    const {
      history: { value }
    } = machineState;
    let breadCrumps;
    if (value === "rsaLetter") {
      breadCrumps = [RSA, RECIPIENT_RSA, RSA_LETTER, INFO_GESTIONNAIRE_CIRCO];
    } else if (value === "rsaSituation") {
      breadCrumps = [
        RSA,
        RECIPIENT_RSA,
        RSA_SITUATION,
        INFO_GESTIONNAIRE_CIRCO
      ];
    } else {
      breadCrumps = [RSA, RECIPIENT_RSA, INFO_GESTIONNAIRE];
    }
    return (
      <div className="container">
        <Feedback />
        <div className="header">
          <Back
            transition={transition}
            machineState={machineState}
            breadCrumps={breadCrumps}
          />
        </div>
        <div className="content final">
          <h3>
            Sélectionnez votre circonscription afin d'être orienté vers le bon
            interlocuteur
          </h3>
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
