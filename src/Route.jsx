import React from "react";
import { Route, Routes } from "react-router-dom";
import Scan_GR_R from "./Page/Scan-GR-R/main/Scan_GR_R";
import GR_R_Upload from "./Page/Page-GRR-Upload/main/grr_upload";
import GR_R_Master_List from "./Page/Page-GRR-Master-List/main/GRR_Master_list";
function RouteComponents() {
  return (
    <>
      <Routes>
        <Route path="/scan_gr_r" element={<Scan_GR_R />} />
        <Route path="/smart_machine_grr_upload" element={<GR_R_Upload />} />
        <Route
          path="/smart_machine_grr_master_list"
          element={<GR_R_Master_List />}
        />
      </Routes>
    </>
  );
}

export default RouteComponents;
