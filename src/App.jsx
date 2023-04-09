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
    key: {
      normal: {
        background: "hsl(45, 7%, 89%)",
        shadow: "hsl(35, 11%, 61%)",
        color: "hsl(221, 14%, 31%)",
      },
      new: {
        color: "hsl(30, 14%, 31%)",
      },
      special: {
        color: "hsl(0, 0%, 100%)",
        background: "hsl(225, 21%, 49%)",
        shadow: "hsl(224, 28%, 35%)",
      },
      equals: {
        background: "hsl(25, 98%, 40%)",
        shadow: "hsl(25, 99%, 27%)",
        color: "hsl(0, 0%, 100%)",
      },
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
    key: {
      normal: {
        background: "hsl(30, 25%, 89%)",
        shadow: "hsl(28, 16%, 65%)",
        color: "hsl(60, 10%, 19%)",
      },
      special: {
        background: "hsl(185, 42%, 37%)",
        shadow: "hsl(185, 58%, 25%)",
        color: "hsl(0, 0%, 100%)",
      },
      equals: {
        background: "hsl(25, 98%, 40%)",
        shadow: "hsl(25, 99%, 27%)",
        color: "hsl(0, 0%, 100%)",
      },
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
    key: {
      normal: {
        background: "hsl(268, 47%, 21%)",
        shadow: "hsl(290, 70%, 36%)",
        color: "hsl(52, 100%, 62%)",
      },
      special: {
        background: "hsl(281, 89%, 26%)",
        shadow: "hsl(285, 91%, 52%)",
        color: "hsl(0, 0%, 100%)",
      },
      equals: {
        background: "hsl(176, 100%, 44%)",
        shadow: "hsl(177, 92%, 70%)",
        color: "hsl(198, 20%, 13%)",
      },
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
