import React, { useState, useEffect, useRef } from "react";
import {
  formatDateTimeForGR_R,
  formatDateTime,
} from "../../../Utility/formatDate/formatDate";
import { showAlert } from "../Components/SweetAlert/SweetAlert";
import axios from "axios";
import PostAPI from "../API/PostAPI";

function InputZone() {
  const [values, setValues] = React.useState([]);
  const [value_OP_ID, setValue_OP_ID] = React.useState([]);
  const [mccode, setMccode] = React.useState("");
  const [mc_type, setMc_type] = React.useState("");
  const [tester_code, setTester_code] = React.useState("");

  const [OP_ID, setOP_ID] = React.useState("");
  const [dimension, setDimension] = React.useState("");
  const [sampling_sn, setsampling_sn] = React.useState("");

  const mc_typeRef = useRef(null);
  const tester_codeRef = useRef(null);
  const op_idRef = useRef(null);
  const dimensionRef = useRef(null);
  const grrRef = useRef(null);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // e.preventDefault();
      dimensionRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    setsampling_sn(e.target.value);
  };

  const handleOP_IDKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setValue_OP_ID((prevValues) => [
        ...prevValues,
        { op_id: OP_ID, create_date: formatDateTime(new Date()) },
      ]);
      setOP_ID("");
      setsampling_sn("");
    }
  };

  const handleOP_IDInputChange = (e) => {
    setOP_ID(e.target.value);
  };

  const handledimensionChange = (e) => {
    setDimension(e.target.value);
  };

  const handleDimensionKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setValues((prevValues) => [
        ...prevValues,
        { dimension: dimension, sn: sampling_sn },
      ]);
      setsampling_sn("");
      // grrRef.current.focus();
    }
  };

  const handleSubbmit = async () => {
    let sum_op_id = "";
    value_OP_ID.forEach((value, index) => {
      if (index !== value_OP_ID.length - 1) {
        sum_op_id += value.op_id + "+";
      } else {
        sum_op_id += value.op_id;
      }
    });
    console.log("SUM_OP_ID", sum_op_id);
    let dateNow = formatDateTimeForGR_R(new Date());
    let Job_id = mccode + "+" + tester_code + "+" + dateNow;

    const data = {
      Job_id: Job_id,
      date_time: dateNow,
      op_id: sum_op_id,
      mc_type: mc_type,
      mc_code: mccode,
      tester_code: tester_code,
      grr_sn_dimension: values,
    };

    //เพิ่มการตรวจสอบเพื่อเช็คว่ามีค่า ไหนที่เป็น null ก่อนจะส่ง api
    let message = "";

    if (data.mc_code === "") {
      message += "MC Code is Empty\n";
    }
    if (data.mc_type === "") {
      message += "MC Type is Empty\n";
    }
    if (data.tester_code === "") {
      message += "Tester Code is Empty\n";
    }
    if (message !== "") {
      showAlert("error", message, "error");
      return;
    }

    // try {
    //   const response = await axios.post(
    //     "http://10.17.66.242:3000/SMART-GR-R/GR-R-Scan/smt_grr_job_record/insert",
    //     data
    //   );
    //   console.log("Response", response);
    //   if (response.data.status === "OK") {
    //     showAlert("success", "Insert Data Success", "Success");
    //     setValues([]);
    //     setValue_OP_ID([]);
    //     setMccode("");
    //     setMc_type("");
    //     setTester_code("");
    //     setOP_ID("");
    //     setDimension("");
    //     setsampling_sn("");
    //   } else {
    //     showAlert("error", response.data.message, "Error");
    //   }
    // } catch (error) {
    //   console.log("Error", error);
    // }
    const response = await PostAPI(
      data,
      `http://10.17.66.242:3000/SMART-GR-R/GR-R-Scan/smt_grr_job_record/insert`
    );
    if (response.status === "OK") {
      showAlert("success", "Insert Data Success", "success");
      setValues([]);
      setValue_OP_ID([]);
      setMccode("");
      setMc_type("");
      setTester_code("");
      setOP_ID("");
      setDimension("");
      setsampling_sn("");
    } else {
      showAlert("error", response.message, "error");
    }
  };

  const handleMC_CodeKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setMccode(e.target.value);
      mc_typeRef.current.focus();
    }
  };

  const handleMc_typeKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setMc_type(e.target.value);
      tester_codeRef.current.focus();
    }
  };

  const handlemc_typeSelect = (e) => {
    setMc_type(e.target.value);
    tester_codeRef.current.focus();
  };

  const handleTester_codeKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTester_code(e.target.value);
      op_idRef.current.focus();
    }
  };

  return (
    <>
      <div className="flex gap-2">
        <div>
          <p className="text-sm font-bold text-base-content mb-1">Machine</p>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Machine"
            value={mccode}
            onChange={(e) => setMccode(e.target.value)}
            onKeyDown={handleMC_CodeKeyDown}
          />
        </div>
        <div>
          <p className="text-sm font-bold text-base-content mb-1">
            Tester Type
          </p>
          <select
            className="input input-bordered w-full max-w-xs"
            value={mc_type}
            onChange={(e) => handlemc_typeSelect(e)}
            ref={mc_typeRef}
          >
            <option value="">Select...</option>
            <option value="System">System</option>
            <option value="Hioki">Hioki</option>
            <option value="FCT">FCT</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <p className="text-sm font-bold text-base-content mb-1">
            Tester Code
          </p>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Tester Code"
            value={tester_code}
            onChange={(e) => setTester_code(e.target.value)}
            onKeyDown={handleTester_codeKeyDown}
            ref={tester_codeRef}
          />
        </div>
        <div>
          <p className="text-sm font-bold text-base-content mb-1">OP ID</p>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="OP ID"
            value={OP_ID}
            onKeyDown={handleOP_IDKeyDown}
            onChange={handleOP_IDInputChange}
            ref={op_idRef}
          />
        </div>
      </div>
      <div className="flex gap-2"></div>
      <div className="divider"></div>
      <div className="flex gap-2">
        <div>
          <p className="text-sm font-bold text-base-content mb-1">Dimension</p>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Dimension"
            value={dimension}
            onChange={handledimensionChange}
            onKeyDown={handleKeyDown}
            ref={grrRef}
          />
        </div>
        <div>
          <p className="text-sm font-bold text-base-content mb-1">
            PC Serial Number
          </p>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder=" PC Serial Number"
            value={sampling_sn}
            onChange={handleInputChange}
            onKeyDown={handleDimensionKeyDown}
            ref={dimensionRef}
          />
        </div>
        <div className="mt-auto flex gap-2">
          <button onClick={handleSubbmit} className="btn btn-primary">
            Submit
          </button>
          <button
            onClick={() => {
              setValues([]);
              setValue_OP_ID([]);
              setMccode("");
              setMc_type("");
              setTester_code("");
              setOP_ID("");
              setDimension("");
              setsampling_sn("");
            }}
            className="btn btn-error"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex gap-2 justify-between mt-2 ">
        <div className="w-full overflow-x-auto bg-base-300 p-4 rounded-xl h-min overflow-y-auto">
          <p className=" font-bold">Operator ID</p>
          <table className="table">
            <thead>
              <tr>
                <th className="border border-base-200 bg-base-100">OP ID</th>
                <th className="border border-base-200 bg-base-100">DateTime</th>
                <th className="border border-base-200 bg-base-100">Action</th>
              </tr>
            </thead>
            <tbody>
              {[...value_OP_ID].reverse().map((value, index) => (
                <tr key={index}>
                  <td className="border border-base-200">{value.op_id}</td>
                  <td className="border border-base-200">
                    {value.create_date}
                  </td>
                  <td className="border border-base-200">
                    <button
                      onClick={() =>
                        setValue_OP_ID((prevValues) =>
                          prevValues.filter((val) => val !== value)
                        )
                      }
                      className="btn btn-error w-full"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full overflow-x-auto bg-base-300 p-4 rounded-xl overflow-y-auto ">
          <p className=" font-bold">Data Input</p>
          <table className="table w-full">
            <thead>
              <tr>
                <th className="border border-base-200 bg-base-100">
                  PC Serial Number
                </th>
                <th className="border border-base-200 bg-base-100">
                  Dimension
                </th>
                <th className="border border-base-200 bg-base-100">Action</th>
              </tr>
            </thead>
            <tbody>
              {[...values].reverse().map((value, index) => (
                <tr key={index}>
                  <td className="border border-base-200">{value.sn}</td>
                  <td className="border border-base-200">{value.dimension}</td>
                  <td className="border border-base-200">
                    <button
                      onClick={() =>
                        setValues((prevValues) =>
                          prevValues.filter((val) => val !== value)
                        )
                      }
                      className="btn btn-error w-full"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default InputZone;
