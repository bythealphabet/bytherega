import React, { createContext, useState } from "react";
import { jsx, css, ThemeProvider } from "@emotion/react"; /** @jsx jsx */
import { themes } from "../styles/theme";
import { themeSaver } from "./theme-saver";

export const ThemeContext = createContext(themeSaver.whatTheme());

function ThemeContextProvider(props) {
  const [active, setActive] = useState(true);

  const toggleTheme = () => {
    themeSaver.setTheme(active);
    return active ? themes[0] : themes[1];
  };

  return (
    <ThemeContext.Provider value={{ active, setActive }}>
      <ThemeProvider theme={toggleTheme()}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
