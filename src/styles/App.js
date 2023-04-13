import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(
  {
    "@global": {
      "*": {
        margin: 0,
        boxSizing: "border-box",
        fontFamily: '"League Spartan", sans-serif',
      },
    },

    root: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: ({ styles }) => styles.backgrounds.app,
      "&>*": {
        width: 500,
      },
    },
    "@media (max-width: 450px)": {
      root: {
        "&>*": {
          width: "calc(100vw - 40px)",
        },
      },
    },
  },
  { name: "App" }
);

export default useStyles;
