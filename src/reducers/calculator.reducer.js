import buttons from "../helpers/buttons";
import calculate from "../helpers/calcLogic";

const operators = buttons
  .filter((b) => b.type === "operator")
  .reduce((prev, current) => {
    prev.push(current.value);
    return prev;
  }, []);

const reducer = (state, action) => {
  switch (action.type) {
    case "NUMBER":
      return { calcText: state.calcText + action.value };
    case "DECIMAL":
      const pattern = /\+|\-|\*|\//;
      console.log(state.calcText.split(pattern));
      if (state.calcText.split(operators).slice(-1).toString().includes(".")) {
        console.log("NO");
        return { calcText: state.calcText };
      } else {
        return { calcText: state.calcText + action.value };
      }
    case "RESET":
      return { calcText: "" };
    case "DEL":
      return { calcText: state.calcText.slice(0, -1) };
    case "OPERATOR":
      if (
        operators.includes(state.calcText.slice(-1)) ||
        !state.calcText.length
      ) {
        console.log("NO");
      } else {
        return { calcText: state.calcText + action.value };
      }
    case "EQUALS": {
      if (
        operators.includes(state.calcText.slice(-1)) ||
        state.calcText.slice(-1) === "."
      ) {
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
