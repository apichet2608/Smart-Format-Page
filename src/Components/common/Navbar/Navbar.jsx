import React from "react";
import Buttonmode from "../ThemeSwitch/ThemeSwitch";
import Drawer from "./Drawer";
import Title from "./Title";
function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <Drawer />
        </div>
        <div className="flex-1">
          <Title />
        </div>
        <div className="flex-none">
          <Buttonmode />
        </div>
      </div>
    </>
  );
}

export default Navbar;
