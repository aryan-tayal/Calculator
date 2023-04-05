import React from "react";
import ThemeSlider from "./ThemeSlider";
const Header = () => {
  return (
    <div
      className="Header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "hsl(0, 0%, 100%)",
      }}
    >
      <h1 className="Header-title">calc</h1> <ThemeSlider />
    </div>
  );
};

export default Header;
