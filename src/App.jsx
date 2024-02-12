import { useState } from "react";
import "./App.css";
import { useTheme } from "../src/Components/common/Theme/ThemeContext/ThemeContext"; // Import the custom hook from ThemeContex
import Box from "@mui/material/Box";
import AppBarComponent from "./Components/common/Appbar/AppBarComponent";
import DrawerComponent from "./Components/common/Appbar/Drawer_Persistent/DrawerComponent";
import MainContent from "./Components/common/Appbar/Drawer_Persistent/MainContent";
// Drawer_Persistent;
// Drawer_mini;
function App() {
  const { isDarkMode } = useTheme(); // Use the isDarkMode function from Context
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBarComponent
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          isDarkMode={isDarkMode}
        />
        <DrawerComponent
          open={open}
          handleDrawerClose={handleDrawerClose}
          isDarkMode={isDarkMode}
        />
        <MainContent open={open} />
      </Box>
    </>
  );
}

export default App;
