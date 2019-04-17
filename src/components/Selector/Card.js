import React from "react";
import classNames from "classnames";
import MaterialIcon from "material-icons-react";
import "./Styles.css";

const SelectorCard = ({ label, icon, onClick, className, color }) => {
  return (
    <div className={classNames("card", className)} onClick={onClick}>
      <MaterialIcon icon={icon} size={50} color={color ? color : "black"} />
      <h4>{label}</h4>
    </div>
  );
};

export default SelectorCard;
