import React from "react";
import { useTheme } from "../ThemeContext/ThemeContext"; // นำเข้า Hook ที่กำหนดเอง

export const ToggleThemeButton = ({ handleToggle }) => {
  const { toggleTheme, isDarkMode } = useTheme(); // ใช้ฟังก์ชัน toggleTheme จาก Context
  const statustheme = isDarkMode === true ? "Dark" : "Light";

  return <button onClick={toggleTheme}>{statustheme}</button>;
};
