import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import { Map, TileLayer } from "react-leaflet";
import { Back } from "../../components";
import "./Styles.css";

class RSACirconscription extends Component {
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
    fetch(`http://api-adresse.data.gouv.fr/search/?q=${value}&limit=10`)
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

    this.refs.map.leafletElement.setView([latitude, longitude], 16);
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
        <div className="content">
          <h3>
            <FontAwesomeIcon icon={faArrowRight} /> Quelle est votre adresse ?
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
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </Map>
        </div>
      </div>
    );
  }
}

export default RSACirconscription;
