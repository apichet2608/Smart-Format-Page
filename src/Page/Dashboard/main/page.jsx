import React from "react";
import Content1 from "./Content1";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
function page() {
  return (
    <>
      <div className="container mx-auto">
        <Content1 title="Title 1" content={<Content />} />
      </div>
    </>
  );
}

export default page;

function Content() {
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        className="bg-base-100"
        sx={{
          width: "100%",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Autocomplete"
            sx={{
              "& .MuiInputBase-root": {
                color: "var(--color-base-100)",
              },
              "& .MuiInputLabel-root": {
                color: "var(--color-base-100)",
              },
            }}
          />
        )}
      />
    </>
  );
}

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
