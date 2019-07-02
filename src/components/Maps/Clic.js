import React, { Component } from "react";
import { GeoJSON } from "react-leaflet";

export default class MapsClic extends Component {
  state = { geoData: null };
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
  render() {
    const { innerRef, showModal } = this.props;
    const { geoData } = this.state;
    return (
      <>
        {geoData && (
          <GeoJSON
            ref={innerRef}
            key={Math.random()
              .toString(36)
              .substr(2, 9)}
            data={geoData}
            showModal={showModal}
            {...this.props}
          />
        )}
      </>
    );
  }
}