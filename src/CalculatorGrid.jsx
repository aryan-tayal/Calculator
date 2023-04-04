import React from "react";
import buttons from "./buttons";
import CalculatorBtn from "./CalculatorBtn";
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
