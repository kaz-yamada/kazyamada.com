import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const storageId = "darkmode";

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const mode = !isDarkMode;
    localStorage.setItem(storageId, JSON.stringify(mode));
    setIsDarkMode(mode);
  };

  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem(storageId));
    if (savedMode !== null) {
      setIsDarkMode(savedMode);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={[isDarkMode, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
