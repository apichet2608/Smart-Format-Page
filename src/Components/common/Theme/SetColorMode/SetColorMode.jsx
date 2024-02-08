import React, { useEffect } from "react";
import { useTheme } from "../ThemeContext/ThemeContext"; // นำเข้า Hook ที่กำหนดเอง

// ฟังก์ชันสำหรับการตั้งค่าสไตล์ของโหมดมืดและโหมดสว่าง
function applyThemeStyles(isDarkMode) {
  const backgroundColor = isDarkMode ? "#1d232a" : "#fff";
  const textColor = isDarkMode ? "#fff" : "#1d232a";
  const bgPaperContent = isDarkMode ? "#2a323c" : "#fafafa";
  const InputBgcolor = isDarkMode ? "#2a323c" : "#fafafa";
  // ตั้งค่าสไตล์บน :root (document.documentElement)

  document.documentElement.style.setProperty(
    "--background-color-theme",
    backgroundColor
  );
  document.documentElement.style.setProperty("--text-color-theme", textColor);
  document.documentElement.style.setProperty(
    "--PaperBg-color-theme",
    bgPaperContent
  );
  document.documentElement.style.setProperty(
    "--InputBgcolor-color-theme",
    bgPaperContent
  );
}

function CheckMode() {
  const { isDarkMode } = useTheme(); // ใช้ฟังก์ชัน isDarkMode จาก Context

  useEffect(() => {
    applyThemeStyles(isDarkMode); // ใช้ฟังก์ชันสำหรับการตั้งค่าสไตล์ตามโหมด
  }, [isDarkMode]);

  return null; // คอมโพเนนต์นี้ไม่แสดงผลอะไรบน UI
}

export default CheckMode;
