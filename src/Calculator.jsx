import React, { useState } from "react";
import CalculatorBtn from "./CalculatorBtn";
import CalculatorScreen from "./CalculatorScreen";

const Calculator = () => {
  const [calcText, setCalcText] = useState("");
  const handleBtnClick = (e) => {
    setCalcText((prev) => prev + e.target.innerText);
  };
  return (
    <div>
      <CalculatorScreen text={calcText} />
      <CalculatorBtn
        value={1}
        type="number"
        key={1}
        onBtnClick={handleBtnClick}
      />
      <CalculatorBtn
        value={2}
        type="number"
        key={2}
        onBtnClick={handleBtnClick}
      />
      <CalculatorBtn
        value={3}
        type="number"
        key={3}
        onBtnClick={handleBtnClick}
      />
      <CalculatorBtn
        value={4}
        type="number"
        key={4}
        onBtnClick={handleBtnClick}
      />
    </div>
  );
};

export default Calculator;
