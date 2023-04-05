import React from "react";
import Calculator from "./Calculator/Calculator";
import Header from "./Header/Header";
import { ThemeProvider } from "./context/theme.context.jsx";
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
