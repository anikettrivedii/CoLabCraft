import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const default_theme = {
  color: "white",
  backgroundColor: "#345678",
  fontFamily: "'Roboto', sans-serif",
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(default_theme);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
