import React from "react";
import { Link } from "react-router-dom";

function ListButton({ closeDrawer }) {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content rounded-r-xl">
      <li>
        <Link to="/dashboard" onClick={closeDrawer}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/1" onClick={closeDrawer}>
          Sidebar Item 1
        </Link>
      </li>
      <li>
        <Link to="/2" onClick={closeDrawer}>
          Sidebar Item 2
        </Link>
      </li>
    </ul>
  );
}

export default ListButton;
