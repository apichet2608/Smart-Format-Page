import React from "react";
import Paper from "@mui/material/Paper";

function Components1(props) {
  const { handleClick } = props;

  return (
    <Paper className="Paper_Contents">
      <div
        className="w-full p-2 animate__animated animate__fadeIn"
        onClick={handleClick}
      >
        Components #1
      </div>
    </Paper>
  );
}

export default Components1;
