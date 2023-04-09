import React from "react";
import buttons from "../helpers/buttons";
import CalculatorBtn from "./CalculatorBtn";
import useStyles from "../styles/CalculatorGrid";
import { useTheme } from "react-jss";
const CalculatorGrid = ({ dispatch }) => {
  const { styles } = useTheme();
  const classes = useStyles({ styles });
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
