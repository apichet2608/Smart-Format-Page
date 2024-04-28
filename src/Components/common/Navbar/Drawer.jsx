import React, { useState } from "react";
import ListButton from "./ListButton";

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="drawer z-10 ">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isOpen}
          onChange={toggleDrawer}
        />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ListButton closeDrawer={closeDrawer} />
        </div>
      </div>
    </>
  );
}

export default Drawer;
