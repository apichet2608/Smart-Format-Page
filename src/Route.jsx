import React from "react";
import { Route, Routes } from "react-router-dom";
import No1 from "./Page/No1/main/No1";
import No2 from "./Page/No1/main/No2";

function RouteComponents() {
  return (
    <>
      <Routes>
        <Route path="/1" element={<No1 />} />
        <Route path="/2" element={<No2 />} />
      </Routes>
    </>
  );
}

export default RouteComponents;
