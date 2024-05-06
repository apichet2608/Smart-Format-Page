import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Tooltip from "@mui/material/Tooltip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Button from "@mui/material/Button";

const UploadIndialog = (props) => {
  const { row, handleFileUpload, handleDownload, handleDelete } = props;

  if (row.upload === null || row.upload === "") {
    return (
      <Tooltip title={row.upload}>
        <Button
          aria-label="upload"
          component="label"
          sx={{
            width: "100%",
            mt: 1.5,
            backgroundColor: "#D6EAF8",

            color: "#3498DB",
          }}
        >
          <div>
            <CloudUploadIcon sx={{ mr: 1, alignItems: "center" }} />
            Upload
            <input
              type="file"
              onChange={(event) => handleFileUpload(event, row)}
              style={{ display: "none" }}
              aria-describedby="file_input_help"
              id="file_input"
            />
          </div>
        </Button>
      </Tooltip>
    );
  } else {
    return (
      //   <Tooltip title={row.upload}>
      //   <Tooltip title="Delete">
      <div
        style={{ marginTop: 10, alignItems: "center" }}
        className="gap-2 flex"
      >
        <h1
          style={{
            fontWeight: "bold",
            color: "#34495E",
            backgroundColor: "#F2F4F4",
            width: "100%",
            height: "30px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => handleDownload(row.upload)}
        >
          <InsertDriveFileIcon sx={{ width: 20, height: 20, ml: 1, mr: 1 }} />
          {row.upload}
          {/* <FileDownloadIcon /> */}
        </h1>

        <button
          style={{
            backgroundColor: "#34495E",
            width: "45px",
            height: "30px",
            borderRadius: "3px",
            color: "#fff",
            transition: "background-color 0.3s ease", // Adding transition for smooth color change
          }}
          onClick={() => handleDelete(row)}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#CB4335")
          } // Red on hover
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#34495E")
          } // Back to original color on hover out
        >
          <DeleteForeverIcon />
        </button>
      </div>
      //   </Tooltip>
    );
  }
};

export default UploadIndialog;
