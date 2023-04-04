import React, { useReducer } from "react";
import CalculatorBtn from "./CalculatorBtn";
import CalculatorScreen from "./CalculatorScreen";
import CalculatorGrid from "./CalculatorGrid";
import reducer from "./reducer";
import buttons from "./buttons";
import "./styles/Calculator.css";
const Calculator = () => {
  const [{ calcText }, dispatch] = useReducer(reducer, { calcText: "" });
  return (
    <div className="Calculator">
      <CalculatorScreen text={calcText} />
      <CalculatorGrid dispatch={dispatch} />
    </div>
  );
};

export default Calculator;
