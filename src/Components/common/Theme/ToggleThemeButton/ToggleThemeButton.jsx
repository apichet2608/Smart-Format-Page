import React from "react";
import { useTheme } from "../ThemeContext/ThemeContext"; // Import the custom hook from ThemeContext
import "./ToggleThemeButton.css"; // Import the CSS file for styling

export const ToggleThemeButton = () => {
  const { toggleTheme, isDarkMode } = useTheme(); // Use the toggleTheme function from Context

  return (
    <label className="light-mode-toggle">
      <input type="checkbox" onChange={toggleTheme} checked={!isDarkMode} />
      <span className="toggle-slider"></span>
    </label>
  );
};
