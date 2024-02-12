import React from "react";
import { Route, Routes } from "react-router-dom";
import No1 from "./Page/No1/No1";

function RouteComponents() {
  return (
    <>
      <Routes>
        <Route path="/" element={<No1 />} />
      </Routes>
    </>
  );
}

export default RouteComponents;
