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
              color: "oklch(var(--bc))",
            },
            "& .MuiInputLabel-root": {
              color: "oklch(var(--bc))",
            },
            width: "100%",
          }}
        />
      </div>
    </>
  );
}

export default TextFieldMUI;
