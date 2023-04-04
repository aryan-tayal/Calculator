import React, { useReducer } from "react";
import CalculatorBtn from "./CalculatorBtn";
import CalculatorScreen from "./CalculatorScreen";
import reducer from "./reducer";
import buttons from "./buttons";

const Calculator = () => {
  const [{ calcText }, dispatch] = useReducer(reducer, { calcText: "" });
  return (
    <div>
      <CalculatorScreen text={calcText} />
      {buttons.map((button) => {
        if (button.type === "number") {
          return (
            <CalculatorBtn
              value={button.value}
              type={button.type}
              key={button.value}
              onBtnClick={() =>
                dispatch({ type: "NUMBER", value: button.value })
              }
            />
          );
        } else if (button.type === "reset") {
          return (
            <CalculatorBtn
              value={button.value}
              type={button.type}
              key={button.value}
              onBtnClick={() => dispatch({ type: "RESET" })}
            />
          );
        } else if (button.type === "delete") {
          return (
            <CalculatorBtn
              value={button.value}
              type={button.type}
              key={button.value}
              onBtnClick={() => dispatch({ type: "DEL" })}
            />
          );
        } else if (button.type === "operator") {
          return (
            <CalculatorBtn
              value={button.value}
              type={button.type}
              key={button.value}
              onBtnClick={() =>
                dispatch({ type: "OPERATOR", value: button.value })
              }
            />
          );
        } else if (button.type === "equal") {
          return (
            <CalculatorBtn
              value={button.value}
              type={button.type}
              key={button.value}
              onBtnClick={() => dispatch({ type: "EQUALS" })}
            />
          );
        }
      })}
    </div>
  );
};

export default Calculator;
