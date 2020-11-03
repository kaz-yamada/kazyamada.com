import React, { createContext, useEffect, useReducer } from "react";
import actionTypes, { setTheme } from "./actions";

const storageId = "theme";
const savedStore = JSON.parse(localStorage.getItem(storageId));

const initialState = savedStore || {
  theme: "light",
};

const ThemeContext = createContext(initialState);

const themeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME: {
      const theme = state.theme === "light" ? "dark" : "light";
      const newState = { ...state, theme };

      localStorage.setItem(storageId, JSON.stringify(newState));

      return newState;
    }
    case actionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    dispatch(setTheme);
  });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
