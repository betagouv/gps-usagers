import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Styles.css";

const SelectorCard = ({ label, icon, onClick, className }) => {
  return (
    <div className={classNames("Card", className)} onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="6x" />
      <h4>{label}</h4>
    </div>
  );
};

export default SelectorCard;
