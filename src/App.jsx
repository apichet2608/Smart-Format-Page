import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBarComponent from "./Components/common/Appbar/AppBarComponent";
import DrawerComponent from "./Components/common/Appbar/Drawer_mini/DrawerComponent";
import MainContent from "./Components/common/Appbar/Drawer_mini/MainContent";
import "./App.css";
import Box from "@mui/material/Box";
// Define the theme configuration outside of the component
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 640, // breakpoint xs
      sm: 768, // breakpoint sm
      md: 1024, // breakpoint md
      lg: 1488, // breakpoint lg
      xl: 1872, // breakpoint xl
    },
  },
});

function App() {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setOpen(matches); // setOpen based on the matches directly
  }, [matches]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <AppBarComponent open={open} handleDrawerOpen={() => setOpen(true)} />
        <DrawerComponent open={open} handleDrawerClose={() => setOpen(false)} />
        <MainContent open={open} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
