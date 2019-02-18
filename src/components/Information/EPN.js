import React, { Component } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPiwik from "react-piwik";
import Autosuggest from "react-autosuggest";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import epnData from "../../assets/epn";
import { Back } from "../../components";
import "./Styles.css";

class InfoEpn extends Component {
  state = {
    value: "",
    suggestions: []
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

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Veuillez renseigner votre adresse",
      value,
      onChange: this.onChange
    };

    return (
      <div className="container">
        <div className="header">
          <Back {...this.props} />
        </div>
        <div className="content final">
          <h3>
            <FontAwesomeIcon icon={faArrowRight} /> Rendez-vous dans l‘EPN ou le
            Point Info 14 le plus proche
          </h3>
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
            {epnData &&
              epnData.map(data => (
                <Marker
                  key={data.name}
                  position={[data.latitude, data.longitude]}
                  onClick={marker =>
                    ReactPiwik.push([
                      "trackEvent",
                      "infoEpn",
                      "marqueur carte",
                      data.name
                    ])
                  }
                >
                  <Popup>
                    <div className="heading1">{data.name}</div>
                    <div className="heading2">{data.structure}</div>
                    <div className="address">
                      {data.address}
                      <br />
                      {data.zip} {data.city}
                    </div>
                    <div className="heading2">
                      <a href={`tel:${data.phone}`} target="_top">
                        {data.phone}
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
          </Map>
        </div>
      </div>
    );
  }
}

export default InfoEpn;
