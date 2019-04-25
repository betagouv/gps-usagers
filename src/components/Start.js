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
          <h2> </h2>
        </div>
        <div className="content">
          <h3>QUEL EST L'OBJET DE VOTRE DEMANDE ?</h3>
          <div className="contentCard">
            <Card
              label="RSA"
              icon="library_books"
              onClick={() => transition("RSA")}
            />
            <Card
              label="Logement"
              icon="home"
              onClick={() => transition("HOUSING")}
            />
            <Card
              label="Personnes handicapées"
              icon="accessible_forward"
              onClick={() => transition("HANDICAPPED")}
            />
            <Card
              label="Personnes âgées"
              icon="hearing"
              onClick={() => transition("SENIORS")}
            />
            <Card
              label="Autre"
              icon="help_outline"
              onClick={() =>
                (window.top.location.href =
                  "https://www.calvados.fr/accueil/formulaire-de-contact-general.html")
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
