import React from "react";
import "./styles.css";

const Divider = ({ classes, isVertical }) => {
  return !isVertical ? (
    <div
      className={`col-sm-12 separator mx-auto align-self-center ${classes}`}
    />
  ) : (
    <div className={`separator-vertical ${classes}`} />
  );
};

export default Divider;
