import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Title() {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/scan_gr_r":
        setTitle("Scan GR&R");
        break;
      default:
        setTitle("Smart Factory Dashboard");
    }
  }, [location]);

  return (
    <>
      <a className="text-xl font-bold font-Inter ml-2">{title}</a>
    </>
  );
}

export default Title;
