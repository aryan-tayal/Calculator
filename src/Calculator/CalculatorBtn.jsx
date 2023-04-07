import React from "react";
import useStyles from "../styles/CalculatorBtn";

const CalculatorBtn = ({ value, type, onBtnClick }) => {
  const classes = useStyles();
  return (
    <button
      onClick={onBtnClick}
      className={`${classes.root} ${
        classes[Object.keys(classes).find((c) => c === type)]
      }`}
    >
      {value}
    </button>
  );
};

export default CalculatorBtn;
