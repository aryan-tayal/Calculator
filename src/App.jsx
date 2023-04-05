import React from "react";
import Calculator from "./Calculator";
import Header from "./Header/Header";
import { ThemeProvider } from "./ThemeContext.jsx";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Calculator />
      </ThemeProvider>
    </div>
  );
};

export default App;
