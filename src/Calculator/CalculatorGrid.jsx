import React from "react";
import buttons from "../helpers/buttons";
import CalculatorBtn from "./CalculatorBtn";
import useStyles from "../styles/CalculatorGrid";
const CalculatorGrid = ({ dispatch }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
