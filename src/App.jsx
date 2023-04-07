import React from "react";
import Calculator from "./Calculator/Calculator";
import Header from "./Header/Header";
import { ThemeProvider } from "./context/theme.context.jsx";
import "./styles/App.css";
import useStyles from "./styles/App";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider>
        <Header />
        <Calculator />
      </ThemeProvider>
    </div>
  );
};

export default App;
