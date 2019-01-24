import React from "react";
import classNames from "classnames";
import "./Styles.css";

const SelectorChoice = ({ label, onClick, className }) => {
  return (
    <div className={classNames("choice", className)} onClick={onClick}>
      <h4>{label}</h4>
    </div>
  );
};

export default SelectorChoice;
