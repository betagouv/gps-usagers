import {
  faArrowRight,
  faFileInvoice,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactPiwik from "react-piwik";
import { Card } from "../components";

class Start extends React.Component {
  componentDidMount() {
    ReactPiwik.push(["setDocumentTitle", "start"]);
    ReactPiwik.push(["trackPageView"]);
  }
  render() {
    const { transition } = this.props;
    return (
      <div className="container">
        <div className="header">
          <h2>Comment pouvons nous vous aider ?</h2>
        </div>
        <div className="content">
          <h3>
            <FontAwesomeIcon icon={faArrowRight} /> Quel est l’objet de votre
            demande ?
          </h3>
          <Card
            label="Le RSA"
            icon={faFileInvoice}
            onClick={() => transition("RSA")}
          />
          <Card
            label="Autre"
            icon={faSignOutAlt}
            onClick={() =>
              (window.top.location.href =
                "https://www.calvados.fr/accueil/formulaire-de-contact-general.html")
            }
          />
        </div>
      </div>
    );
  }
}

export default Start;
