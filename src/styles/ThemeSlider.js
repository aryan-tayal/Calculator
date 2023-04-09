import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      alignItems: "center",
    },
    title: {
      margin: {
        right: 10,
      },
    },
    rollarea: {
      backgroundColor: ({ styles }) => styles.backgrounds.calculator,
      height: "30px",
      padding: "5px",
      width: "100px",
      borderRadius: "50rem",
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
    },
    rollinput: {
      width: "25.5%",
      position: "relative",
      "&:nth-of-type(2)": {
        textAlign: "center",
      },
      "&:nth-of-type(3)": {
        textAlign: "right",
      },
      "& label": {
        width: "100%",
        margin: {
          bottom: 10,
        },
        position: "absolute",
        bottom: "100%",
        left: 0,
        cursor: "pointer",
        fontSize: "1.1rem",
      },
      "& input": {
        height: "100%",
        width: "100%",
        opacity: 0,
        display: "block",
        cursor: "pointer",
      },
    },
    rollball: {
      "--i": "5",
      pointerEvents: "none",
      width: 20,
      height: 20,
      backgroundColor: ({ styles }) => styles.toggle,
      borderRadius: "50rem",
      position: "absolute",
      left: "calc(var(--i) * 1px)",
      top: 5,
      transition: "left 0.5s ease-in-out",
    },
  },
  { name: "ThemeSlider" }
);

export default useStyles;
