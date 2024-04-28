import React from "react";
import { Route, Routes } from "react-router-dom";
import No1 from "./Page/No1/main/No1";
import No2 from "./Page/No2/main/No2";
import Dashboard from "./Page/Dashboard/main/page";
function RouteComponents() {
  return (
    <>
      <Routes>
        <Route path="/1" element={<No1 />} />
        <Route path="/2" element={<No2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default RouteComponents;
