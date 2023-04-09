import React from "react";
import Header from "./Header/Header";
import Calculator from "./Calculator/Calculator";
import useStyles from "./styles/App";
import { useTheme } from "react-jss";
const Page = () => {
  const { styles } = useTheme();
  const classes = useStyles({ styles });
  return (
    <div className={classes.root}>
      <Header />
      <Calculator />
    </div>
  );
};

export default Page;
