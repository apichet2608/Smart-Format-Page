import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "@fontsource/press-start-2p";
// Supports weights 100-900
import "@fontsource-variable/inter";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
