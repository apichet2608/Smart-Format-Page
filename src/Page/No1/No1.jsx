import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function No1() {
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
  return (
    <ThemeProvider theme={theme}>
      <div className="container mx-auto">
        <div className="bg-blue-400 w-full p-2 animate__animated animate__fadeIn">
          No1
        </div>
      </div>
    </ThemeProvider>
  );
}

export default No1;
