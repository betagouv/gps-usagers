import React, { Component } from "react";
import ReactPiwik from "react-piwik";
import { GeoJSON, Map, TileLayer } from "react-leaflet";
import { getGeoJson } from "../../assets/data";
import { Back, Feedback } from "../../components";
import { ModalConsumer } from "../../components/Modal/ModalContext";
import { GestionnaireModal } from "../../components/Modal";
import { CIRCO_PHONE } from "../../utils/circonscriptions";
import "./Styles.css";

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

    return (
      <div className="container">
        <Feedback />
        <div className="header">
          <Back {...this.props} />
        </div>
        <div className="content final">
          <h3>
            Sélectionnez votre circonscription afin d'être orienté vers le bon
            interlocuteur
          </h3>
          {circoName && <div className="circoName">{circoName}</div>}
          <Map className="map" center={position} zoom={zoom}>
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
