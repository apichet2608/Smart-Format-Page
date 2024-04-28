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
      xs: 534, // breakpoint xs
      sm: 640, // breakpoint sm
      md: 1072, // breakpoint md
      lg: 1340, // breakpoint lg
      xl: 1912, // breakpoint xl
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
    // <ThemeProvider theme={theme}>
    //   {/* <Box sx={{ display: "fixed" }}> */}
    //   {/* <AppBarComponent open={open} handleDrawerOpen={() => setOpen(true)} /> */}
    //   {/* <DrawerComponent open={open} handleDrawerClose={() => setOpen(false)} /> */}
    //   <MainContent open={open} />
    //   {/* </Box> */}
    // </ThemeProvider>
    <ThemeProvider theme={theme}>
      <MainContent open={open} />
    </ThemeProvider>
  );
}

export default App;
