import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { GeoJSON, Map, TileLayer } from "react-leaflet";
import { getGeoJson } from "../../assets/data";
import { Back } from "../../components";
import { ModalConsumer } from "../../components/Modal/ModalContext";
import { CMSModal } from "../../components/Modal";
import { CIRCO, CMS } from "../../utils/circonscriptions";
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

export default class InfoCMS extends Component<{}, State> {
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

  onClick = e => {
    const circoName = e.target.feature.properties.tags.cas;
    e.target.options.showModal(CMSModal, {
      circo: CIRCO[circoName],
      cms: CMS[circoName]
    });
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
    const { zoom } = this.state;

    return (
      <div className="container">
        <div className="header">
          <Back {...this.props} />
        </div>
        <div className="content final">
          <h3>
            <FontAwesomeIcon icon={faArrowRight} /> Sélectionnez votre
            circonscription afin d'être orienté vers le bon interlocuteur
          </h3>
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
