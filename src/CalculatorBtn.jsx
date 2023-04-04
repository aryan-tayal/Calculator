import React from "react";

const CalculatorBtn = ({ value, onBtnClick }) => {
  return <button onClick={onBtnClick}>{value}</button>;
};

export default CalculatorBtn;
