import React, { useState, useEffect } from "react";
import { applyTheme } from "../themes/themeMapping";
import { DEFAULT_THEME } from "../themes";

export const ThemeContext = React.createContext({
  theme: "dark",
  changeTheme: () => {},
});

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "base") {
      setTheme("dark");
    } else {
      setTheme("base");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
