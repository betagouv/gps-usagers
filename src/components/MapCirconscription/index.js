import React, { Component } from "react";
import { GeoJSON } from "react-leaflet";
import { ModalConsumer } from "../../components/Modal/ModalContext";
// import { getGeoJson } from "../../assets/data";

class GeoJsonComponent extends Component {
  state = { geoData: null };
  componentDidMount = async () => {
    let header = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    });

    await fetch("http://localhost:3001/", { header: header })
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

export const ContexedMap = React.forwardRef((props, ref) => {
  return (
    <ModalConsumer>
      {({ showModal }) => (
        <GeoJsonComponent innerRef={ref} showModal={showModal} {...props} />
      )}
    </ModalConsumer>
  );
});
