import React, { useState } from "react";
import Calculator from "./Calculator/Calculator";
import Header from "./Header/Header";
// import { ThemeProvider } from "./context/theme.context.jsx";
import useStyles from "./styles/App";
import { ThemeProvider } from "react-jss";

import themeStyles from "./helpers/themeStyles";

const App = () => {
  const [theme, setTheme] = useState(1);
  const styles = themeStyles[theme - 1];
  const classes = useStyles({ styles });
  return (
    <div className={classes.root}>
      <ThemeProvider theme={{ theme, styles, setTheme }}>
        <Header />
        <Calculator />
      </ThemeProvider>
    </div>
  );
};

export default App;
