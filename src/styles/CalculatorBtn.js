import { createUseStyles } from "react-jss";

const lighten = (hsl) => {
  let l = parseInt(hsl.split("(")[1].split(",")[2].split("%")[0]);
  return `${hsl.split(l)[0]}${l + 10}%)`;
};

const useStyles = createUseStyles(
  ({ styles: { key } }) => ({
    root: {
      color: key.normal.color,
      backgroundColor: key.normal.background,
      boxShadow: `0 3px 0 ${key.normal.shadow}`,
      border: "none",
      padding: {
        top: 13,
        bottom: 13,
      },
      fontSize: "1.5rem",
      textTransform: "uppercase",
      cursor: "pointer",
      borderRadius: "0.25rem",
      transition: "background-color 0.2s",
      "&:hover": {
        backgroundColor: lighten(key.normal.background),
      },
    },
    reset: {
      color: key.special.color,
      backgroundColor: key.special.background,
      boxShadow: `0 3px 0 ${key.special.shadow}`,
      "&:hover": {
        backgroundColor: lighten(key.special.background),
      },
      gridColumn: "span 2",
    },
    del: {
      color: key.special.color,
      backgroundColor: key.special.background,
      boxShadow: `0 3px 0 ${key.special.shadow}`,
      "&:hover": {
        backgroundColor: lighten(key.special.background),
      },
    },
    equals: {
      backgroundColor: key.equals.background,
      boxShadow: `0 3px 0 ${key.equals.shadow}`,
      "&:hover": {
        backgroundColor: lighten(key.equals.background),
      },
      color: key.equals.color,
      gridColumn: "span 2",
    },
  }),
  { name: "CalculatorBtn" }
);
// const useStyles = createUseStyles(
//   {
//     root: {
//       "--bg": "hsl(30, 25%, 89%)",
//       "--shadow": "hsl(28, 16%, 65%)",
//       "--text": "hsl(221, 14%, 31%)",
//       "--hover": "hsl(30, 25%, 95%)",
//       color: ({ styles: { key } }) => key.normal.color,
//       backgroundColor: ({ styles: { key } }) => key.normal.background,
//       boxShadow: ({ styles: { key } }) => `0 3px 0 ${key.normal.shadow}`,
//       border: "none",
//       padding: {
//         top: 9,
//         bottom: 9,
//       },
//       fontSize: "1.3rem",
//       textTransform: "uppercase",
//       cursor: "pointer",
//       borderRadius: "0.25rem",
//       transition: "background-color 0.2s",
//       "&:hover": {
//         backgroundColor: "var(--hover)",
//       },
//     },
//     reset: {
//       color: ({ styles: { key } }) => [key.special.color, "!important"],
//       backgroundColor: ({ styles: { key } }) => key.special.background,
//       boxShadow: ({ styles: { key } }) => `0 3px 0 ${key.special.shadow}`,
//       // color: ({ styles: { key } }) => key.special.color,

//       gridColumn: "span 2",
//     },
//     del: {
//       color: ({ styles: { key } }) => key.special.color,
//       backgroundColor: ({ styles: { key } }) => key.special.background,
//       boxShadow: ({ styles: { key } }) => `0 3px 0 ${key.special.shadow}`,
//     },
//     equals: {
//       backgroundColor: ({ styles: { key } }) => key.equals.background,
//       boxShadow: ({ styles: { key } }) => `0 3px 0 ${key.equals.shadow}`,
//       color: ({ styles: { key } }) => key.equals.color,
//       gridColumn: "span 2",
//     },
//   },
//   { name: "CalculatorBtn" }
// );

export default useStyles;
