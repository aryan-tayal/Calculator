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
      " --main-color": "#191f31",
      "--secondary-color": "#c54539",
      "--text-color": "#fff",
      "--bg-color": "#3b4564",
      backgroundColor: "var(--main-color)",
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
    // "rollinput:nth-of-type(2)": {
    //   textAlign: "center",
    //   "& input": {
    //     margin: {
    //       left: "auto",
    //       right: "auto",
    //     },
    //   },
    // },
    rollball: {
      "--i": "5",
      pointerEvents: "none",
      width: "20px",
      height: "20px",
      backgroundColor: "var(--secondary-color)",
      borderRadius: "50rem",
      position: "absolute",
      left: "calc(var(--i) * 1px)",
      top: "5px",
      transition: "left 0.5s ease-in-out",
    },
  },
  { name: "ThemeSlider" }
);

export default useStyles;
