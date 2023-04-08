import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(
  {
    "@import":
      "url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap')",
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
      backgroundColor: "hsl(222, 26%, 31%)",
      "&>*": {
        width: 400,
      },
    },
  },
  { name: "App" }
);

export default useStyles;
