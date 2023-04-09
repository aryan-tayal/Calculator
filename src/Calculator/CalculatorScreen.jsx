import React from "react";
import useStyles from "../styles/CalculatorScreen";
import { useTheme } from "react-jss";

const CalculatorScreen = ({ text }) => {
  const { styles } = useTheme();
  const classes = useStyles({ styles });
  return <div className={classes.root}>{text}</div>;
};

export default CalculatorScreen;
