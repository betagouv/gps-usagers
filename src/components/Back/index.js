import React from "react";
import ReactPiwik from "react-piwik";
import MaterialIcon from "material-icons-react";
import "./Styles.css";
class Back extends React.Component {
  componentDidMount() {
    const { machineState } = this.props;
    ReactPiwik.push(["setCustomUrl", "/" + window.location.hash.substr(1)]);
    ReactPiwik.push(["setDocumentTitle", machineState.value]);
    ReactPiwik.push(["trackPageView"]);
    ReactPiwik.push(["enableLinkTracking"]);
  }

  handleClick = () => {
    const { transition, machineState } = this.props;
    ReactPiwik.push(["trackEvent", machineState.value, "étape précédente"]);
    transition("BACK");
  };

  render() {
    const { breadCrumps } = this.props;
    return (
      <div className="previous">
        <div className="previousLink" onClick={this.handleClick}>
          <MaterialIcon icon="keyboard_arrow_left" size={25} color="#e73f57" />
          <span>retour</span>
        </div>
        <div className="breadCrumps">
          {(breadCrumps || []).map((item, i, arr) => {
            return (
              <span key={`breadCrumps-${i}`}>
                {i !== 0 && (
                  <MaterialIcon
                    icon="keyboard_arrow_right"
                    size={25}
                    color="#7e7e7e"
                  />
                )}
                <div>{item}</div>
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Back;
