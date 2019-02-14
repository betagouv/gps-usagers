import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactPiwik from "react-piwik";
import "./Styles.css";
class Back extends React.Component {
  componentDidMount() {
    const { machineState } = this.props;
    ReactPiwik.push(["setCustomUrl", "/" + window.location.hash.substr(1)]);
    ReactPiwik.push(["setDocumentTitle", machineState.value]);
    ReactPiwik.push(["trackPageView"]);
  }
  render() {
    const { transition } = this.props;
    return (
      <div className="previous" onClick={() => transition("BACK")}>
        <div className="previousLink">
          <FontAwesomeIcon icon={faCaretLeft} size="2x" />
          <span>Retour à l'étape précédente</span>
        </div>
      </div>
    );
  }
}

export default Back;
