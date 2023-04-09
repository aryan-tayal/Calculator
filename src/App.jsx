import React from "react";
import Calculator from "./Calculator/Calculator";
import Header from "./Header/Header";
import useStyles from "./styles/App";
import { ThemeProvider } from "react-jss";
import useTheme from "./hooks/useThemeState";
import themeStyles from "./helpers/themeStyles";

const App = () => {
  const [theme, setTheme] = useTheme(1);
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
