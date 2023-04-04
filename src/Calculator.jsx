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
  { value: "del", type: "delete" },
  { value: "/", type: "operator" },
  { value: "*", type: "operator" },
  { value: "+", type: "operator" },
  { value: "-", type: "operator" },
  { value: "=", type: "equal" },
];

const Calculator = () => {
  const [calcText, setCalcText] = useState("");
  const handleNumberClick = (e) => {
    setCalcText((prev) => prev + e.target.innerText);
  };
  const handleResetClick = () => {
    setCalcText("");
  };
  const handleDelClick = () => {
    setCalcText((prev) => prev.slice(0, -1));
  };
  const handleOperatorClick = (e) => {
    const operators = buttons
      .filter((b) => b.type === "operator")
      .reduce((prev, current) => {
        prev.push(current.value);
        return prev;
      }, []);
    if (operators.includes(calcText.slice(-1)) || !calcText.length) {
      console.log("NO");
    } else {
      setCalcText((prev) => prev + e.target.innerText);
    }
  };
  const handleEqualsClick = () => {
    const operators = buttons
      .filter((b) => b.type === "operator")
      .reduce((prev, current) => {
        prev.push(current.value);
        return prev;
      }, []);
    if (operators.includes(calcText.slice(-1))) {
      console.log("NO!");
    } else {
      setCalcText(eval(calcText));
    }
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
        } else if (button.type === "delete") {
          return (
            <CalculatorBtn
              value={button.value}
              type={button.type}
              key={button.value}
              onBtnClick={handleDelClick}
            />
          );
        } else if (button.type === "operator") {
          return (
            <CalculatorBtn
              value={button.value}
              type={button.type}
              key={button.value}
              onBtnClick={handleOperatorClick}
            />
          );
        } else if (button.type === "equal") {
          return (
            <CalculatorBtn
              value={button.value}
              type={button.type}
              key={button.value}
              onBtnClick={handleEqualsClick}
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
