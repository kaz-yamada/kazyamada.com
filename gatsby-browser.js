/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */

import React from "react";
import { ThemeProvider } from "./src/context/ThemeContext";

require("prismjs/themes/prism-okaidia.css");

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
