import React, { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Back } from "../../components";
import "./Styles.css";

import { getGeoJson } from "../../assets/data";

export default class InfoEPN extends Component<{}, State> {
  state = {
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
      this.setState(() => ({ value: layer.feature.properties.tags.cas }));
    }
  };

  resetHighlight = e => {
    this.refs.geojson.leafletElement.resetStyle(e.target);
    this.setState(() => ({ value: "" }));
  };

  // zoomToFeature = e => {
  //   map.fitBounds(e.target.getBounds());
  // };

  onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight
      // click: this.zoomToFeature
    });
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const { zoom, value } = this.state;
    const { transition } = this.props;
    return (
      <div className="Container Info">
        <div className="Header">
          <Back transition={transition} />
        </div>
        <div className="Content">
          <h3>
            <FontAwesomeIcon icon={faArrowRight} /> Quelle est votre adresse ?{" "}
            {value}
          </h3>
          <Map className="Map" center={position} zoom={zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON
              ref="geojson"
              key={Math.random()
                .toString(36)
                .substr(2, 9)}
              data={getGeoJson()}
              onEachFeature={this.onEachFeature}
              style={this.getStyle}
            />
          </Map>
        </div>
      </div>
    );
  }
}
