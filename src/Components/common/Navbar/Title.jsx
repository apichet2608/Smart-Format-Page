import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Title() {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setTitle("Dashboard");
        break;
      case "/1":
        setTitle("Report 1");
        break;
      case "/2":
        setTitle("Report 2");
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
