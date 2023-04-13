import buttons from "../helpers/buttons";
import calculate from "../helpers/calcLogic";
const reducer = (state, action) => {
  switch (action.type) {
    case "NUMBER":
      return { calcText: state.calcText + action.value };
    case "DECIMAL":
      if (!state.calcText.includes(".")) {
        return { calcText: state.calcText + action.value };
      } else {
        console.log("NO");
        return { calcText: state.calcText };
      }
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
        return { calcText: calculate(state.calcText) };
      }
    }
    default: {
      return state;
    }
  }
};
export default reducer;
