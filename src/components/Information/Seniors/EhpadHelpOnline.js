import React, { Component } from "react";
import ReactPiwik from "react-piwik";
import { Map, TileLayer } from "react-leaflet";
import { Back, Feedback } from "../../../components";
import { CMSModal } from "../../../components/Modal";
import { CLIC } from "../../../utils/circonscriptions";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_EHPAD,
  INFO_SENIORS_EHPAD_HELP_ONLINE
} from "../../BreadCrumps";
import { ContexedMap } from "../../MapCirconscription";

export default class InfoSeniorsEhpadOnline extends Component {
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
      "infoCms",
      "circonscription",
      e.target.feature.properties.tags.cas
    ]);
    e.target.options.showModal(CMSModal, {
      circo: CLIC[circoName]
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
              SENIORS,
              SENIORS_EHPAD,
              INFO_SENIORS_EHPAD_HELP_ONLINE
            ]}
          />
        </div>
        <div className="content final">
          <h3>Contactez le gestionnaire pour obtenir un renseignement </h3>
          <p>
            Numéro de téléphone du gestionnaire de dossier
            <h2 className="phoneList">
              <a href="tel:0250224022" target="_top">
                02 50 22 40 22
              </a>
            </h2>
          </p>
          <h3>
            Ou rendez-vous dans votre centre local d'information et de
            coordination (CLIC) ou centre médico-social (CMS) le plus proche de
            chez vous
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
