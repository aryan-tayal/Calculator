import React from "react";
import "../styles/CalculatorBtn.css";
const CalculatorBtn = ({ value, type, onBtnClick }) => {
  return (
    <button onClick={onBtnClick} className={`CalculatorBtn ${type}`}>
      {value}
    </button>
  );
};

export default CalculatorBtn;
