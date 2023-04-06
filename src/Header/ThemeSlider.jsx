import React, { useRef, useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import useStyles from "../styles/ThemeSlider";

const ThemeSlider = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const transformBall = useRef(6);
  const ballRef = useRef();

  const handleThemeInputChange = (e) => {
    setTheme(parseInt(e.target.value));
    transformBall.current +=
      e.target.getBoundingClientRect().left -
      ballRef.current.getBoundingClientRect().left;
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>Theme</h3>
      <div className={classes.rollarea}>
        {[1, 2, 3].map((input) => (
          <div className={classes.rollinput} key={`theme${input}`}>
            <label htmlFor={`theme${input}`}>{input}</label>
            <input
              type="radio"
              name="theme"
              value={input}
              id={`theme${input}`}
              checked={theme === input ? "checked" : ""}
              onChange={handleThemeInputChange}
            />
          </div>
        ))}
        <div
          className={classes.rollball}
          style={{ "--i": transformBall.current }}
          ref={ballRef}
        ></div>
      </div>
    </div>
  );
};

export default ThemeSlider;
