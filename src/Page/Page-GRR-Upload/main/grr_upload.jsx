import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import UploadGrrTable from "../components/Upload_grr_table";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BackupIcon from "@mui/icons-material/Backup";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Main_GRR_upload = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 640, // breakpoint xs
        sm: 768, // breakpoint sm
        md: 1024, // breakpoint md
        lg: 1488, // breakpoint lg
        xl: 1872, // breakpoint xl
      },
    },
  });

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-start">
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{
              backgroundColor: "oklch(var(--b1))",
              borderRadius: 3,
              fontSize: 24,
              fontWeight: "bold",
              color: "oklch(var(--bc))",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",

              border: "1px solid #D7DBDD",
            }}
          >
            Upload GR&R Data
            <BackupIcon
              sx={{ ml: 2, width: 40, height: 40, color: "#3498DB" }}
            />
          </Typography>
        </div>
        <div className="flex justify-center">
          <UploadGrrTable />
        </div>
      </div>
    </div>
  );
};

export default Main_GRR_upload;
