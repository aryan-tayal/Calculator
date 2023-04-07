import React from "react";
import useStyles from "../styles/CalculatorScreen";
const CalculatorScreen = ({ text }) => {
  const classes = useStyles();
  return <div className={classes.root}>{text}</div>;
};

export default CalculatorScreen;
