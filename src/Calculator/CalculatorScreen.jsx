import React from "react";
import useStyles from "../styles/CalculatorScreen";
import { useTheme } from "react-jss";

const CalculatorScreen = ({ text }) => {
  const { styles } = useTheme();
  console.log(styles);
  const classes = useStyles({ styles });
  // const classes = useStyles();
  return <div className={classes.root}>{text}</div>;
};

export default CalculatorScreen;
