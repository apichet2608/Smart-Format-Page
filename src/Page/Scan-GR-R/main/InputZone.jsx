import React, { useState, useEffect, useRef } from "react";
import {
  formatDateTimeForGR_R,
  formatDateTime,
} from "../../../Utility/formatDate/formatDate";

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
      e.preventDefault();
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
      setDimension("");
      setsampling_sn("");
      grrRef.current.focus();
    }
  };

  const handleSubbmit = () => {
    console.log("MCCODE", mccode);
    console.log("MC_TYPE", mc_type);
    console.log("TESTER_CODE", tester_code);
    console.log("OP_ID", value_OP_ID);
    console.log("SN", values);
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
    let Job_id = mccode + "+" + tester_code + "+" + tester_code + dateNow;
    console.log("JOB_ID", Job_id);
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
        {formatDateTime(new Date())}
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="MC Code"
          value={mccode}
          onChange={(e) => setMccode(e.target.value)}
          onKeyDown={handleMC_CodeKeyDown}
        />
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="MC Type"
          value={mc_type}
          onChange={(e) => setMc_type(e.target.value)}
          onKeyDown={handleMc_typeKeyDown}
          ref={mc_typeRef}
        />
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Tester Code"
          value={tester_code}
          onChange={(e) => setTester_code(e.target.value)}
          onKeyDown={handleTester_codeKeyDown}
          ref={tester_codeRef}
        />

        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="OP ID"
          value={OP_ID}
          onKeyDown={handleOP_IDKeyDown}
          onChange={handleOP_IDInputChange}
          ref={op_idRef}
        />

        <div className="w-full overflow-x-auto bg-base-300 p-4 rounded-xl">
          <p className=" font-bold">Operator ID</p>
          <table className="table w-full">
            <thead>
              <tr>
                <th className="border border-base-200">OP ID</th>
                <th className="border border-base-200">DateTime</th>
                <th className="border border-base-200 ">Action</th>
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
      </div>
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        placeholder="GR&R"
        value={sampling_sn}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={grrRef}
      />
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        placeholder="GR&R"
        value={dimension}
        onChange={handledimensionChange}
        onKeyDown={handleDimensionKeyDown}
        ref={dimensionRef}
      />
      <div className="flex gap-2 justify-between mt-2 ">
        <div className="w-full overflow-x-auto bg-base-300 p-4 rounded-xl">
          <p className=" font-bold">Data Input</p>
          <table className="table w-full">
            <thead>
              <tr>
                <th className="border border-base-200">SN</th>
                <th className="border border-base-200">Dimension</th>
                <th className="border border-base-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {values.map((value, index) => (
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
        <button onClick={handleSubbmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    </>
  );
}

export default InputZone;
