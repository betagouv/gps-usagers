import React, { Component } from "react";
import ReactPiwik from "react-piwik";
import { Map, TileLayer } from "react-leaflet";
import { Back, Feedback } from "../../../components";
import { CMSModal } from "../../../components/Modal";
import { CLIC, CMS } from "../../../utils/circonscriptions";
import "../Styles.css";
import {
  SENIORS,
  SENIORS_EHPAD,
  INFO_SENIORS_EHPAD_LIST
} from "../../BreadCrumps";
import { ContexedMap } from "../../MapCirconscription";

export default class InfoSeniorsEhpadList extends Component {
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
      circo: CLIC[circoName],
      cms: CMS[circoName]
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
            breadCrumps={[SENIORS, SENIORS_EHPAD, INFO_SENIORS_EHPAD_LIST]}
          />
        </div>
        <div className="content final">
          <h1>
            Joindre le centre local d'information et de coordination (CLIC)
          </h1>
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
