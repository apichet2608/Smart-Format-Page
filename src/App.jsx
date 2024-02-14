import { useEffect, useState } from "react";
import "./App.css";
import { useTheme } from "../src/Components/common/Theme/ThemeContext/ThemeContext"; // Import the custom hook from ThemeContex
// import { Box } from "@mui/material";
import AppBarComponent from "./Components/common/Appbar/AppBarComponent";
import DrawerComponent from "./Components/common/Appbar/Drawer_mini/DrawerComponent";
import MainContent from "./Components/common/Appbar/Drawer_mini/MainContent";
import useMediaQuery from "@mui/material/useMediaQuery";
// Drawer_Persistent;
// Drawer_mini;
function App() {
  const { isDarkMode } = useTheme(); // Use the isDarkMode function from Context
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(min-width:600px)");
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (matches) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [matches]);

  return (
    <>
      <div style={{ display: "flex" }}>
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
      </div>
    </>
  );
}

export default App;
