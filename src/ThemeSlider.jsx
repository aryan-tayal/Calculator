import React, { useState } from "react";

const ThemeSlider = () => {
  const [theme, setTheme] = useState(1);
  const handleThemeInputChange = (e) => {
    setTheme(parseInt(e.target.value));

    // ball.style.setProperty(
    //   "--i",
    //   parseInt(getComputedStyle(ball).getPropertyValue("--i")) +
    //     e.target.getBoundingClientRect().left -
    //     ball.getBoundingClientRect().left
    // );
  };
  return (
    <div className="roll-area">
      {[1, 2, 3].map((input) => (
        <div className="roll-input">
          <label htmlFor={`theme${input}`}>Theme {input}</label>
          <input
            type="radio"
            name="theme"
            value={input}
            id={`theme${input}`}
            key={`theme${input}`}
            checked={theme === input ? "checked" : ""}
            onChange={handleThemeInputChange}
          />
        </div>
      ))}
      <div className="roll-ball"></div>
    </div>
  );
};

export default ThemeSlider;
