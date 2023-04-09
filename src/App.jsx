import React, { useState } from "react";
import Calculator from "./Calculator/Calculator";
import Header from "./Header/Header";
// import { ThemeProvider } from "./context/theme.context.jsx";
import useStyles from "./styles/App";
import { ThemeProvider } from "react-jss";

const themeStyles = [
  {
    backgrounds: {
      app: "hsl(222, 26%, 31%)",
      calculator: "hsl(223, 31%, 20%)",
      screen: "hsl(224, 36%, 15%)",
    },
    text: {
      primary: "hsl(0, 0%, 100%)",
      toggle: "hsl(6, 63%, 50%)",
    },
  },
  {
    backgrounds: {
      app: "hsl(0, 0%, 90%)",
      calculator: "hsl(0, 5%, 81%)",
      screen: "hsl(0, 0%, 93%)",
    },
    text: {
      primary: "hsl(60, 10%, 19%)",
      toggle: "hsl(25, 98%, 40%)",
    },
  },
  {
    backgrounds: {
      app: "hsl(268, 75%, 9%)",
      calculator: "hsl(268, 71%, 12%)",
      screen: "hsl(268, 71%, 12%)",
    },
    text: {
      primary: "hsl(52, 100%, 62%)",
      toggle: "hsl(176, 100%, 44%)",
    },
  },
];

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
