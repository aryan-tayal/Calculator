import React, { useRef } from "react";
import { useTheme } from "react-jss";
import useStyles from "../styles/ThemeSlider";

const ThemeSlider = () => {
  const { theme, styles, setTheme } = useTheme();
  const transformBall = useRef(theme === 1 ? 5 : theme === 2 ? 38.5 : 72);
  const ballRef = useRef();

  const handleThemeInputChange = (e) => {
    setTheme(parseInt(e.target.value));
    transformBall.current +=
      e.target.getBoundingClientRect().left -
      ballRef.current.getBoundingClientRect().left;
  };

  const classes = useStyles({ styles });

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
