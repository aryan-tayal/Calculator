import React from "react";
import ThemeSlider from "./ThemeSlider";
import { useTheme } from "react-jss";

const Header = () => {
  const { styles } = useTheme();
  return (
    <div
      className="Header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: styles.text.primary,
      }}
    >
      <h1 className="Header-title">calc</h1> <ThemeSlider />
    </div>
  );
};

export default Header;
