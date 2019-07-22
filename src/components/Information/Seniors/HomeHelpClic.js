// import React, { Component } from "react";

// import ReactPiwik from "react-piwik";
// import Autosuggest from "react-autosuggest";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// import { saadData, admrData } from "../../../assets/saad";
// import { Back, Feedback } from "../../../components";
// import "../Styles.css";
// import { SENIORS, INFO_SENIORS_HOME_HELP } from "../../BreadCrumps";

// class InfoSeniorHomeHelpClic extends Component {
//   state = {
//     value: "",
//     suggestions: []
//   };

//   onChange = (event, { newValue }) => {
//     this.setState({
//       value: newValue
//     });
//   };

//   onSuggestionsFetchRequested = ({ value }) => {
//     fetch(`https://api-adresse.data.gouv.fr/search/?q=${value}&limit=10`)
//       .then(response => response.json())
//       .then(data => this.setState({ suggestions: data.features }));
//   };

//   onSuggestionsClearRequested = () => {
//     this.setState({
//       suggestions: []
//     });
//   };

//   onClick = suggestion => {
//     const [longitude, latitude] = suggestion.geometry.coordinates;
//     ReactPiwik.push([
//       "trackEvent",
//       "infoEpn",
//       "adresse",
//       suggestion.properties.postcode
//     ]);

//     this.refs.map.leafletElement.setView([latitude, longitude], 13);
//     return suggestion.properties.label;
//   };

//   render() {
//     const { value, suggestions } = this.state;
//     const { transition, machineState } = this.props;

//     const inputProps = {
//       placeholder: "Veuillez renseigner votre adresse",
//       value,
//       onChange: this.onChange
//     };

//     console.log(saadData);

//     return (
//       <div className="container">
//         <Feedback />
//         <div className="header">
//           <Back
//             transition={transition}
//             machineState={machineState}
//             breadCrumps={[SENIORS, INFO_SENIORS_HOME_HELP]}
//           />
//         </div>
//         <div className="content final">
//           <h1>Rechercher les services d'aide à domicile près de chez vous</h1>
//           <Autosuggest
//             suggestions={suggestions}
//             onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//             onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//             getSuggestionValue={this.onClick}
//             renderSuggestion={suggestion => (
//               <span>{suggestion.properties.label}</span>
//             )}
//             inputProps={inputProps}
//           />

//           <Map
//             ref="map"
//             className="mapSuggest"
//             center={[49.183333, -0.35]}
//             zoom={9}
//           >
//             <TileLayer
//               url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
//               attribution='<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
//             />
//             {saadData &&
//               saadData.map(data => (
//                 <Marker
//                   key={data.name}
//                   position={[data.latitude, data.longitude]}
//                   onClick={marker =>
//                     ReactPiwik.push([
//                       "trackEvent",
//                       "infoSaad",
//                       "marqueur carte",
//                       data.name
//                     ])
//                   }
//                 >
//                   {console.log("WOONIES LOG: render -> data", data)}
//                   <Popup>
//                     <div className="heading1">{data.name}</div>
//                     <div className="address">{data.address}</div>
//                     <div className="heading2">
//                       <a href={`tel:${data.phone}`} target="_top">
//                         {data.phone}
//                       </a>
//                     </div>
//                     <div className="heading2">
//                       <a href={`mailto:${data.mail}`} target="_top">
//                         {data.mail}
//                       </a>
//                     </div>
//                   </Popup>
//                 </Marker>
//               ))}
//             {admrData &&
//               admrData.map(data => (
//                 <Marker
//                   key={data.name}
//                   position={[data.latitude, data.longitude]}
//                   onClick={marker =>
//                     ReactPiwik.push([
//                       "trackEvent",
//                       "infoSaad",
//                       "marqueur carte",
//                       data.name
//                     ])
//                   }
//                 >
//                   <Popup>
//                     <div className="heading1">{data.name}</div>
//                     <div className="address">{data.address}</div>
//                     <div className="heading2">
//                       <a href={`tel:${data.phone}`} target="_top">
//                         {data.phone}
//                       </a>
//                     </div>
//                     <div className="heading2">
//                       <a href={`mailto:${data.mail}`} target="_top">
//                         {data.mail}
//                       </a>
//                     </div>
//                   </Popup>
//                 </Marker>
//               ))}
//           </Map>
//         </div>
//       </div>
//     );
//   }
// }

// export default InfoSeniorHomeHelpClic;

import React, { Component } from "react";
import ReactPiwik from "react-piwik";
import { Map, TileLayer } from "react-leaflet";
import { Back, Feedback } from "../../../components";
import { CMSModal } from "../../../components/Modal";
import { CLIC, CMS } from "../../../utils/circonscriptions";
import "../Styles.css";
import { SENIORS, INFO_SENIORS_HOME_HELP } from "../../BreadCrumps";
import { ContexedMap } from "../../MapCirconscription";

export default class InfoSeniorHomeHelpClic extends Component {
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
            breadCrumps={[SENIORS, INFO_SENIORS_HOME_HELP]}
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
