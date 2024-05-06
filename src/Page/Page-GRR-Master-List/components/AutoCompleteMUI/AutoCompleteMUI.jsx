import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function AutoCompleteMUI({ options, getOptionLabel, value, onChange, label }) {
  return (
    <>
      <div className=" rounded-xl bg-base-300 p-2 w-full max-w-xl">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          getOptionLabel={getOptionLabel}
          className="bg-base-100 p-1 rounded-md"
          value={value}
          onChange={onChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label={label}
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
