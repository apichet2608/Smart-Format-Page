import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Tooltip from "@mui/material/Tooltip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";

const FileCell = (props) => {
  const { row, handleFileUpload, handleDownload, handleDelete } = props;

  if (row.upload === null || row.upload === "") {
    return (
      <Tooltip title={row.upload}>
        <IconButton aria-label="upload" component="label">
          <div className="text-cyan-500 p-2 flex rounded-xl bg-cyan-50 hover:scale-110 active:scale-100 duration-300">
            <CloudUploadIcon />
            <input
              type="file"
              onChange={(event) => handleFileUpload(event, row)}
              style={{ display: "none" }}
              aria-describedby="file_input_help"
              id="file_input"
            />
          </div>
        </IconButton>
      </Tooltip>
    );
  } else {
    return (
      <Tooltip title={row.upload}>
        <div className="gap-2 flex">
          <button
            onClick={() => handleDownload(row.upload)}
            className="text-violet-700 bg-violet-100 p-2 rounded-xl shadow-md hover:scale-110 active:100 duration-300"
          >
            <FileDownloadIcon />
          </button>

          <button
            onClick={() => handleDelete(row)}
            className="text-red-600 bg-red-100 p-2 rounded-xl shadow-md hover:scale-110 active:100 duration-300"
          >
            <DeleteForeverIcon />
          </button>
        </div>
      </Tooltip>
    );
  }
};

export default FileCell;
