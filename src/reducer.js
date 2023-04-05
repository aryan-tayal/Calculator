import buttons from "./buttons";

const reducer = (state, action) => {
  switch (action.type) {
    case "NUMBER":
      return { calcText: state.calcText + action.value };
    case "RESET":
      return { calcText: "" };
    case "DEL":
      return { calcText: state.calcText.slice(0, -1) };
    case "OPERATOR":
      const operators = buttons
        .filter((b) => b.type === "operator")
        .reduce((prev, current) => {
          prev.push(current.value);
          return prev;
        }, []);
      if (
        operators.includes(state.calcText.slice(-1)) ||
        !state.calcText.length
      ) {
        console.log("NO");
      } else {
        return { calcText: state.calcText + action.value };
      }
    case "EQUALS": {
      const operators = buttons
        .filter((b) => b.type === "operator")
        .reduce((prev, current) => {
          prev.push(current.value);
          return prev;
        }, []);
      if (operators.includes(state.calcText.slice(-1))) {
        console.log("NO!");
      } else {
        return { calcText: eval(state.calcText).toString() };
      }
    }
    default: {
      return state;
    }
  }
};
export default reducer;
