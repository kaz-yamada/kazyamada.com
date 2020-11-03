const types = {
  TOGGLE_THEME: "TOGGLE_THEME",
  SET_THEME: "SET_THEME",
};

export const toggleTheme = () => {
  return { type: types.TOGGLE_THEME };
};

export const setTheme = (payload) => {
  return { type: types.SET_THEME, payload };
};

export default types;
