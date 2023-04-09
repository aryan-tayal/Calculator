import React from "react";
import useStyles from "../styles/CalculatorBtn";
import { useTheme } from "react-jss";
const CalculatorBtn = ({ value, type, onBtnClick }) => {
  const { styles } = useTheme();
  const classes = useStyles({ styles });
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
