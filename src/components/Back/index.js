import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import "./Styles.css";

const Back = ({ transition }) => {
  return (
    <div className="previous" onClick={() => transition("BACK")}>
      <div className="previousLink">
        <FontAwesomeIcon icon={faCaretLeft} size="2x" />
        <span>Retour à l'écran précédent</span>
      </div>
    </div>
  );
};

export default Back;
