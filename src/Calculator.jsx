import React from "react";
import CalculatorBtn from "./CalculatorBtn";
import CalculatorScreen from "./CalculatorScreen";

const Calculator = () => {
  return (
    <div>
      <CalculatorScreen text="1*2" />
      <CalculatorBtn value={1} type="number" key={1} />
      <CalculatorBtn value={2} type="number" key={2} />
      <CalculatorBtn value={3} type="number" key={3} />
      <CalculatorBtn value={4} type="number" key={4} />
    </div>
  );
};

export default Calculator;
