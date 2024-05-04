import React from "react";
import { showAlert } from "../Components/SweetAlert/SweetAlert";
import InputZone from "./InputZone";
function Scan_GR_R() {
  const handleShowAlert = () => {
    showAlert("Hello", "This is a test", "success");
  };

  return (
    <div className="container mx-auto">
      <InputZone />
      <button onClick={handleShowAlert} className="btn btn-ghost">
        Show Alert
      </button>
    </div>
  );
}

export default Scan_GR_R;
