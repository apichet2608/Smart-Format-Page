import React from "react";
import TextField from "@mui/material/TextField";

function TextFieldMUI() {
  return (
    <>
      <div className=" rounded-xl bg-base-100 p-2 w-full">
        <TextField
          id="standard-basic"
          type="text"
          variant="standard"
          label="TextField"
          sx={{
            "& .MuiInputBase-root": {
              color: "var(--color-base-100)",
            },
            "& .MuiInputLabel-root": {
              color: "var(--color-base-100)",
            },
            width: "100%",
          }}
        />
      </div>
    </>
  );
}

export default TextFieldMUI;
