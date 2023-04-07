import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(
  {
    "*": {
      margin: 0,
      boxSizing: "border-box",
      fontFamily: '"League Spartan", sans-serif',
    },
    root: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "hsl(222, 26%, 31%)",
      "&>*": {
        width: 400,
      },
    },
  },
  { name: "App" }
);

export default useStyles;
