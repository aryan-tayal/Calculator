import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(
  {
    root: {
      color: ({ styles }) => styles.text,
      backgroundColor: ({ styles }) => styles.backgrounds.screen,
      borderRadius: 10,
      height: 100,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: 10,
      fontSize: "3rem",
      overflow: "hidden",
      margin: {
        top: 30,
        bottom: 30,
      },
      width: "100%",
    },
  },
  { name: "CalculatorScreen" }
);

export default useStyles;
