import { useState, useEffect } from "react";

const useTheme = (initialVal = 1) => {
  const [state, setState] = useState(
    JSON.parse(window.localStorage.getItem("theme")) || initialVal
  );
  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(state));
  }, [state]);
  return [state, setState];
};

export default useTheme;
