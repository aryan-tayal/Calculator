import React, { useState, useRef, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./styles/ThemeSlider.css";
const ThemeSlider = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const transformBall = useRef(6);
  const ballRef = useRef();
  console.log(transformBall);
  const handleThemeInputChange = (e) => {
    setTheme(parseInt(e.target.value));
    transformBall.current +=
      e.target.getBoundingClientRect().left -
      ballRef.current.getBoundingClientRect().left;
    // console.log(
    //   ballRef.current.getBoundingClientRect().left
    //   //   transformBall.current +
    //   //     e.target.getBoundingClientRect().left -
    //   //     ballRef.current.getBoundingClientRect().left
    // );
    // ball.style.setProperty(
    //   "--i",
    //   parseInt(getComputedStyle(ball).getPropertyValue("--i")) +
    //     e.target.getBoundingClientRect().left -
    //     ball.getBoundingClientRect().left
    // );
  };
  return (
    <div className="ThemeSlider">
      <h3 className="ThemeSlider-title">Theme</h3>
      <div className="roll-area">
        {[1, 2, 3].map((input) => (
          <div className="roll-input" key={`theme${input}`}>
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
          className="roll-ball"
          style={{ "--i": transformBall.current }}
          ref={ballRef}
        ></div>
      </div>
    </div>
  );
};

export default ThemeSlider;
