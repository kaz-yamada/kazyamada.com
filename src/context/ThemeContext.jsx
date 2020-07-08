import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
// const supportsDarkMode = () =>
//   window.matchMedia("(prefers-color-scheme: dark)").matches === true;

const ThemeProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { children } = props;

  return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
