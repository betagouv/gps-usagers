import React from "react";
import classNames from "classnames";

const SelectorChoice = ({ label, onClick, className }) => {
  return (
    <div className={classNames("Choice", className)} onClick={onClick}>
      <h4>{label}</h4>
    </div>
  );
};

export default SelectorChoice;
