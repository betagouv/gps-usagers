import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { GeoJSON, Map, TileLayer } from "react-leaflet";
import { getGeoJson } from "../../assets/data";
import { Back } from "../../components";
import "./Styles.css";

const circonscription = {
  "Pays d'Auge Sud": "02 31 57 17 81",
  "USDA Centre": "02 31 57 17 81",
  "Pays d'Auge Nord": "02 31 57 17 81",
  "USDA Nord": "02 31 57 17 81",
  "USDA Sud": "02 31 57 17 68",
  "Caen Ouest": "02 31 57 17 68",
  Bocage: "02 31 57 17 68",
  "Pré-Bocage": "02 31 57 17 68",
  Falaise: "02 31 57 17 68",
  Bessin: "02 31 57 17 68",
  "Caen Est": "02 31 57 17 68"
};

export default class InfoGestionnaire extends Component<{}, State> {
  state = {
    showModal: false,
    selectedCirconscription: "",
    lat: 49.183333,
    lng: -0.35,
    zoom: 9,
    value: ""
  };

  showModal = () => {
    this.setState(() => ({
      showModal: true
    }));
  };

  hideModal = () => {
    this.setState(() => ({
      showModal: false
    }));
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

  onClick = e => {
    this.setState(
      () => ({ selectedCirconscription: e.target.feature.properties.tags.cas }),
      () => this.showModal()
    );
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
    const { zoom, selectedCirconscription, showModal } = this.state;
    const { transition } = this.props;
    return (
      <div className="container final">
        <div className="header">
          <Back transition={transition} />
        </div>
        <div className="content">
          <h3>
            <FontAwesomeIcon icon={faArrowRight} /> Sélectionnez votre
            circonscription afin d'être orienté vers le bon interlocuteur
          </h3>
          <Map className="map" center={position} zoom={zoom}>
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

          {showModal && (
            <div className="modal">
              <div onClick={this.hideModal} className="modalClose">
                X
              </div>
              <div className="modalContent">
                {" "}
                <div>
                  Veuillez contacter votre gestionnaire de dossier <br />
                  au numéro de téléphone suivant :
                </div>
                <div className="phone">
                  {circonscription[selectedCirconscription]}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
