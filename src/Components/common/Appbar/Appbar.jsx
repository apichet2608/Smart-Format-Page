import React, { useState } from "react";
import { ToggleThemeButton } from "../Theme/ToggleThemeButton/ToggleThemeButton";
import Drawer from "./Drawer";
import "./appbar.css";

function Appbar() {
  return (
    <div className="app_bar">
      <ToggleThemeButton />
    </div>
  );
}

export default Appbar;
