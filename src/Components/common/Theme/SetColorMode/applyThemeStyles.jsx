// applyThemeStyles.js
// Function for setting dark and light mode styles
export function applyThemeStyles(isDarkMode) {
  const backgroundColor = isDarkMode ? "#28243d" : "#f4f5fa";
  const textColor = isDarkMode ? "#fff" : "#1d232a";
  const bgPaperContent = isDarkMode ? "#2a323c" : "#fafafa";
  const inputBgColor = isDarkMode ? "#2a323c" : "#fafafa";

  // Set styles on :root (document.documentElement)
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
    inputBgColor
  );
}
// Appbar - Color - theme;
