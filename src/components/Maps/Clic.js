import React, { Component } from "react";
import ReactPiwik from "react-piwik";
import Autosuggest from "react-autosuggest";
import { GeoJSON, Map, TileLayer } from "react-leaflet";
import { ModalConsumer } from "../../components/Modal/ModalContext";
import { ClicModal } from "../Modal";
import "./Styles.css";

class Clic extends Component {
  state = {
    value: "",
    suggestions: [],
    geoData: null
  };

  componentDidMount = async () => {
    let header = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    });

    await fetch("http://localhost:3001/clic", { header: header })
      .then(response => response.json())
      .then(response => {
        this.setState({
          geoData: response.features
        });
      })
      .catch(error => console.log(error));
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    fetch(`https://api-adresse.data.gouv.fr/search/?q=${value}&limit=10`)
      .then(response => response.json())
      .then(data => this.setState({ suggestions: data.features }));
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onClick = suggestion => {
    const [longitude, latitude] = suggestion.geometry.coordinates;
    ReactPiwik.push([
      "trackEvent",
      "infoEpn",
      "adresse",
      suggestion.properties.postcode
    ]);

    this.refs.map.leafletElement.setView([latitude, longitude], 13);
    return suggestion.properties.label;
  };

  highlightFeature = e => {};

  resetHighlight = e => {
    this.refs.geojson.leafletElement.resetStyle(e.target);
    this.setState(() => ({ circoName: null, value: "" }));
  };

  onClickMarker = e => {
    const { showModal } = this.props;
    showModal(ClicModal, {
      clic: e.sourceTarget.feature.properties
    });
  };

  onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight,
      click: this.onClickMarker
    });
  };

  render() {
    const { value, suggestions, geoData } = this.state;

    const inputProps = {
      placeholder: "Veuillez renseigner votre adresse",
      value,
      onChange: this.onChange
    };

    return (
      <>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.onClick}
          renderSuggestion={suggestion => (
            <span>{suggestion.properties.label}</span>
          )}
          inputProps={inputProps}
        />

        <Map
          ref="map"
          className="mapSuggest"
          center={[49.183333, -0.35]}
          zoom={9}
        >
          <TileLayer
            url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
            attribution='<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
          />
          {geoData && (
            <GeoJSON
              ref="geojson"
              key={Math.random()
                .toString(36)
                .substr(2, 9)}
              data={geoData}
              onEachFeature={this.onEachFeature}
            />
          )}
        </Map>
      </>
    );
  }
}

const MapsClic = React.forwardRef((props, ref) => {
  return (
    <ModalConsumer>
      {({ showModal }) => (
        <Clic innerRef={ref} showModal={showModal} {...props} />
      )}
    </ModalConsumer>
  );
});

export default MapsClic;
