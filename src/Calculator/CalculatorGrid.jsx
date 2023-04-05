import React from "react";
import buttons from "../helpers/buttons";
import CalculatorBtn from "./CalculatorBtn";
import "../styles/CalculatorGrid.css"
const CalculatorGrid = ({ dispatch }) => {
  return (
    <div className="CalculatorGrid">
      {buttons.map((button) => (
        <CalculatorBtn
          value={button.value}
          type={button.type}
          key={button.value}
          onBtnClick={() =>
            dispatch({ type: button.type.toUpperCase(), value: button.value })
          }
        />
      ))}
    </div>
  );
};

export default CalculatorGrid;
