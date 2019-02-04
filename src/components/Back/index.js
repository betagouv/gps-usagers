import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactPiwik from "react-piwik";
import "./Styles.css";
class Back extends React.Component {
  componentDidMount() {
    const { machineState } = this.props;
    ReactPiwik.push(["trackPageView", machineState.value]);
  }
  render() {
    const { transition } = this.props;
    return (
      <div className="previous" onClick={() => transition("BACK")}>
        <div className="previousLink">
          <FontAwesomeIcon icon={faCaretLeft} size="2x" />
          <span>Retour à l'écran précédent</span>
        </div>
      </div>
    );
  }
}

export default Back;
