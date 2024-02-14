import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Components1 from "../Components/Components1/Components1";
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

  const handlesampleClick = () => {
    console.log("Done");
    alert("Done");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="container mx-auto">
        <Components1 handleClick={handlesampleClick} />
      </div>
    </ThemeProvider>
  );
}

export default No1;
