import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(
  {
    root: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "1rem",
      backgroundColor: ({ styles }) => styles.backgrounds.calculator,
      padding: "1.5rem",
      borderRadius: 10,
    },
  },
  { name: "CalculatorGrid" }
);

export default useStyles;
