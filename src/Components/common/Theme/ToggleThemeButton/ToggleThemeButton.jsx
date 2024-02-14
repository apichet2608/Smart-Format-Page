import React from "react";
import { useTheme } from "../ThemeContext/ThemeContext"; // Import the custom hook from ThemeContext
import "./ToggleThemeButton.css"; // Import the CSS file for styling
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const ToggleThemeButton = () => {
  const { toggleTheme, isDarkMode } = useTheme(); // Use the toggleTheme function from Context
  const options = [true, false];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <label className="light-mode-toggle">
      <input type="checkbox" onChange={toggleTheme} checked={!isDarkMode} />
      <span className="toggle-slider"></span>
    </label>
  );
};
