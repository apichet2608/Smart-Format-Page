import React from "react";
import { Route, Routes } from "react-router-dom";
import Scan_GR_R from "./Page/Scan-GR-R/main/Scan_GR_R";

function RouteComponents() {
  return (
    <>
      <Routes>
        <Route path="/scan_gr_r" element={<Scan_GR_R />} />
      </Routes>
    </>
  );
}

export default RouteComponents;
