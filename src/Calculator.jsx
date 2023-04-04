import React from "react";
import CalculatorBtn from "./CalculatorBtn";

const Calculator = () => {
  return (
    <div>
      <CalculatorBtn value={1} type="number" key={1} />
      <CalculatorBtn value={2} type="number" key={2} />
      <CalculatorBtn value={3} type="number" key={3} />
      <CalculatorBtn value={4} type="number" key={4} />
    </div>
  );
};

export default Calculator;
