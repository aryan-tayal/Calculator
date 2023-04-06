import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(
  {
    root: {
      "--bg": "hsl(30, 25%, 89%)",
      "--shadow": "hsl(28, 16%, 65%)",
      "--text": "hsl(221, 14%, 31%)",
      "--hover": "hsl(30, 25%, 95%)",
      color: " var(--text)",
      backgroundColor: "var(--bg)",
      boxShadow: " 0 3px 0 var(--shadow)",
      border: "none",
      padding: {
        top: 9,
        bottom: 9,
      },
      fontSize: "1.3rem",
      textTransform: "uppercase",
      cursor: "pointer",
      borderRadius: "0.25rem",
      transition: "background-color 0.2s",
      "&:hover": {
        backgroundColor: "var(--hover)",
      },
    },
    reset: {
      "--text": "hsl(0, 0%, 100%)",
      "--bg": "hsl(225, 21%, 49%)",
      "--shadow": "hsl(224, 28%, 35%)",
      "--hover": "hsl(225, 21%, 55%)",
      gridColumn: "span 2",
    },
    del: {
      "--text": "hsl(0, 0%, 100%)",
      "--bg": "hsl(225, 21%, 49%)",
      "--shadow": "hsl(224, 28%, 35%)",
      "--hover": "hsl(225, 21%, 55%)",
    },
    equals: {
      "--text": "hsl(0, 0%, 100%)",
      "--bg": "hsl(6, 63%, 50%)",
      "--shadow": "hsl(6, 70%, 34%)",
      "--hover": "hsl(6, 63%, 55%)",
      gridColumn: "span 2",
    },
  },
  { name: "CalculatorBtn" }
);

export default useStyles;
