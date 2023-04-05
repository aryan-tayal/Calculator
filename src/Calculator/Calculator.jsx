import React, { useReducer } from "react";
import CalculatorScreen from "./CalculatorScreen";
import CalculatorGrid from "./CalculatorGrid";
import reducer from "../reducers/calculator.reducer";
import "../styles/Calculator.css";
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
