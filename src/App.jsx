import React, { useState } from "react";
import Calculator from "./Calculator/Calculator";
import Header from "./Header/Header";
// import { ThemeProvider } from "./context/theme.context.jsx";
import useStyles from "./styles/App";
import { ThemeProvider } from "react-jss";

const themeStyles = [
  {
    colorPrimary: "#f00",
  },
  {
    colorPrimary: "#0f0",
  },
  {
    colorPrimary: "#00f",
  },
];

const App = () => {
  const classes = useStyles();
  const [theme, setTheme] = useState(1);
  return (
    <div className={classes.root}>
      <ThemeProvider
        theme={{ theme, styles: themeStyles[theme - 1], setTheme }}
      >
        <Header />
        <Calculator />
      </ThemeProvider>
    </div>
  );
};

export default App;
