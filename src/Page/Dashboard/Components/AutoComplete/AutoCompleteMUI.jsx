import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function AutoCompleteMUI() {
  return (
    <>
      <div className=" rounded-xl bg-base-100 p-2 w-full">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          className="bg-base-100"
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Autocomplete"
              sx={{
                "& .MuiInputBase-root": {
                  color: "oklch(var(--bc))",
                },
                "& .MuiInputLabel-root": {
                  color: "oklch(var(--bc))",
                },
              }}
            />
          )}
        />
      </div>
    </>
  );
}

export default AutoCompleteMUI;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
