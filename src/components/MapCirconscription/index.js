import React, { Component } from "react";
import { GeoJSON } from "react-leaflet";
import { ModalConsumer } from "../../components/Modal/ModalContext";
import { getGeoJson } from "../../assets/data";

class GeoJsonComponent extends Component {
  state = { geoData: {} };
  componentDidMount = () => {
    // let header = new Headers({
    //   "Access-Control-Allow-Origin": "*",
    //   "Content-Type": "multipart/form-data"
    // });
    // fetch(
    //   "https://atlas.calvados.fr/index.php/lizmap/service/?repository=00&project=wfs&SERVICE=WFS&VERSION=1.0.0&REQUEST=GetFeature&TYPENAME=cas&OUTPUTFORMAT=GEOJSON",
    //   { mode: "no-cors", header: header }
    // ).then(response =>
    //   console.log(
    //     "WOONIES LOG: GeoJsonComponent -> componentDidMount -> response.json()",
    //     response.json()
    //   )
    // );
    // .then(response =>
    //   this.setState({
    //     geoData: response.data.features
    //   })
    // );
  };
  render() {
    const { innerRef, showModal } = this.props;
    // const { geoData } = this.state;
    return (
      <GeoJSON
        ref={innerRef}
        key={Math.random()
          .toString(36)
          .substr(2, 9)}
        data={getGeoJson()}
        showModal={showModal}
        {...this.props}
      />
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
