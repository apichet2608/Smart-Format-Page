import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Chip, TextField } from "@mui/material";
import { Select, MenuItem, InputLabel, InputAdornment } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Swal from "sweetalert2";
import { DatePicker } from "antd";
import dayjs from "dayjs";

import UploadIndialog from "../UploadInDialog";

export default function MainEditGrrDialog({
  mainedit,
  opens,
  func_handleClose,
  refreshtable,
  after,
  handleFileUpload,
  handleDelete,
}) {
  if (!mainedit) {
    return <div></div>;
  }

  const [GrrEditMain, setGrrEditMain] = useState([]);

  const [itemCodeList, setItemCodeList] = useState([]);
  const [selectedMachineCode, setSelectedMachineCode] = useState("");

  useEffect(() => {
    if (opens) {
      setSelectedMachineCode("");

      if (mainedit) {
        setGrrEditMain({
          mc_code: mainedit.mc_code || "",
          grr_desc: mainedit.grr_desc || "",
          plan: mainedit.plan || "",
          id: mainedit.id,
        });

        setSelectedMachineCode(mainedit.machine_code || "");
      } else {
        setGrrEditMain({
          grr_desc: "",
          plan: "",
        });
      }
    } else {
      setGrrEditMain({
        grr_desc: "",
        plan: "",
      });
    }
  }, [opens, mainedit]);

  //   ANT DATE PICKER

  const handlesaveedit = () => {
    console.log(GrrEditMain);
    const updatedData = {
      grr_desc: GrrEditMain.grr_desc || null,
      plan: GrrEditMain.plan || null,
      id: GrrEditMain.id,
    };

    console.log("Updated Data:", updatedData);

    axios
      .put(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_smart_matchine_grr
        }/EditMainGrr/${updatedData.id}`, // Include the id in the URL
        updatedData
      )
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        console.log(updatedData);
        refreshtable();
        after();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your data has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // Handle the error as needed
        console.error("Error updating data:", error);
        refreshtable();
      });
  };

  const dateFormat = "YYYY-MM-DD HH:mm";

  return (
    <div>
      <Dialog
        open={opens}
        onClose={func_handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ m: 0, p: 2, zIndex: 1001 }}
        maxWidth={"xs"}
      >
        <DialogContent sx={{ padding: "auto", minWidth: "auto" }}>
          <Grid container spacing={1}>
            <Chip label="Edit" sx={{ fontSize: 20, padding: 1 }} />

            <Grid item xs={5}>
              <TextField
                size="small"
                label="Machine Code"
                value={GrrEditMain.mc_code}
                onChange={(e) => {
                  setSelectedMachineCode({
                    ...GrrEditMain,
                    grr_desc: e.target.value,
                  });
                }}
                sx={{ mt: 6, ml: -9.5, width: "100%" }}
                disabled
              />
            </Grid>
            <Grid item xs={5}>
              <InputLabel sx={{ fontSize: "13px", mt: 3.5 }}>Plan</InputLabel>
              <DatePicker
                size="large"
                sx={{ width: "100%" }}
                showTime={{ format: "HH:mm" }}
                format={dateFormat}
                defaultValue={
                  mainedit.plan ? dayjs(new Date(mainedit.plan || "")) : null
                }
                onChange={(date, dateString) =>
                  setGrrEditMain({
                    ...GrrEditMain,
                    plan: dateString,
                  })
                }
              />
            </Grid>

            {/* GRR DESC */}
            <Grid item xs={12}>
              <TextField
                size="small"
                InputProps={{
                  startAdornment: <EditNoteIcon sx={{ ml: -1 }} />,
                }}
                label="GR&R Desc"
                value={GrrEditMain.grr_desc || ""}
                onChange={(e) => {
                  setGrrEditMain({
                    ...GrrEditMain,
                    grr_desc: e.target.value,
                  });
                }}
                sx={{ mt: 2.5, width: "100%" }}
              />
            </Grid>

            {/* UPLOAD FILE */}
            {/* <Grid item xs={12}>
              <UploadIndialog
                row={mainedit}
                handleFileUpload={handleFileUpload}
                handleDelete={handleDelete}
              />
            </Grid> */}
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            size="small"
            variant="contained"
            sx={{
              fontSize: 12,
              backgroundColor: "#73C6B6",
              "&:hover": { backgroundColor: "#3D8D73" },
            }}
            onClick={handlesaveedit}
            autoFocus
          >
            Save
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{
              fontSize: 12,
              width: "6%",
              backgroundColor: "#EC7063",
              "&:hover": { backgroundColor: "#AF4834" },
            }}
            autoFocus
            onClick={func_handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
