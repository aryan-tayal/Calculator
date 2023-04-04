import React, { useState } from "react";
import CalculatorBtn from "./CalculatorBtn";
import CalculatorScreen from "./CalculatorScreen";

const buttons = [
  {
    value: 1,
    type: "number",
  },
  {
    value: 2,
    type: "number",
  },
  {
    value: 3,
    type: "number",
  },
  {
    value: 4,
    type: "number",
  },
  {
    value: 5,
    type: "number",
  },
  {
    value: 6,
    type: "number",
  },
  {
    value: 7,
    type: "number",
  },
  {
    value: 8,
    type: "number",
  },
  {
    value: 9,
    type: "number",
  },
  {
    value: 0,
    type: "number",
  },
  {
    value: "reset",
    type: "reset",
  },
];

const Calculator = () => {
  const [calcText, setCalcText] = useState("");
  const handleNumberClick = (e) => {
    setCalcText((prev) => prev + e.target.innerText);
  };
  const handleResetClick = () => {
    setCalcText("");
  };
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
              onBtnClick={handleNumberClick}
            />
          );
        } else if (button.type === "reset") {
          return (
            <CalculatorBtn
              value={button.value}
              type={button.type}
              key={button.value}
              onBtnClick={handleResetClick}
            />
          );
        }
      })}
      {/* <CalculatorBtn
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
      /> */}
    </div>
  );
};

export default Calculator;
