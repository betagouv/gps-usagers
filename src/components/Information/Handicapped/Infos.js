import React, { Component } from "react";
import ReactPiwik from "react-piwik";
import { GeoJSON, Map, TileLayer } from "react-leaflet";
import { getGeoJson } from "../../../assets/data";
import { Back, Feedback } from "../../../components";
import { ModalConsumer } from "../../../components/Modal/ModalContext";
import { MDPHModal } from "../../../components/Modal";
import { MDPH } from "../../../utils/circonscriptions";
import { HANDICAPPED, HANDICAPPED_INFOS } from "../../BreadCrumps";
import "../Styles.css";

const ContexedMap = React.forwardRef((props, ref) => {
  return (
    <ModalConsumer>
      {({ showModal }) => (
        <GeoJSON
          ref={ref}
          key={Math.random()
            .toString(36)
            .substr(2, 9)}
          data={getGeoJson()}
          showModal={showModal}
          {...props}
        />
      )}
    </ModalConsumer>
  );
});

export default class InfoHandicappedInfos extends Component {
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
          breadCrumps={[HANDICAPPED, HANDICAPPED_INFOS]}
        />
        </div>
        <div className="content final">
        <h1>Des informations générales sont à votre disposition sur le site</h1>
        <p>
          en cliquant sur le lien suivant :{" "}
          <a href="https://www.calvados.fr/mdph" target="_top">
            https://www.calvados.fr/mdph
          </a>
        </p>
        <p>
          Vous pouvez contacter l'accueillant-instructeur de votre dossier :
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
