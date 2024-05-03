import React from "react";
import TextField from "@mui/material/TextField";

function DateMUI() {
  return (
    <>
      <div className=" rounded-xl bg-base-100 p-2 w-full">
        <TextField
          variant="standard"
          id="TextField"
          label={"Date"}
          type={"date"}
          value={"2021-10-01"}
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

export default DateMUI;
