import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import axios from "axios";

import Grid from "@mui/material/Grid";
import { InputLabel, InputAdornment } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Swal from "sweetalert2";
import { Chip, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Autocomplete from "@mui/material/Autocomplete";

import { DatePicker } from "antd";
import "../CSS/ant.css";

const AddNewGrr = ({ refreshdata }) => {
  const [open, setOpen] = useState(false);

  const [masterGrrList, setMasterGrrList] = useState([]);
  const [selectedGrr_DESC, setSelectedGrr_DESC] = useState({ grr_desc: "" });

  const [distinctmccode, setDistinctMcCode] = useState([]);
  const [selectmccode, setSelectMcCode] = useState({ mc_code: "" });

  const [SelectDateplan, setSelectDateplan] = useState("");

  const featchDistinctMc_Code = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_smart_matchine_grr
        }/Master_grr_mc_code_grr_desc`,
        { grr_desc: selectedGrr_DESC.grr_desc }
      );
      const jsonData = response.data;

      console.log("distinct_mc_code:", jsonData);
      setDistinctMcCode(jsonData);
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      refreshdata();
    }
  };

  const distinctMasterGrr = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_smart_matchine_grr
        }/Master_grr_mc_code_grr_desc_choose`
      );
      const jsonData = response.data;

      console.log("distinct_masterGrr_GR&R_Desc:", jsonData);
      setMasterGrrList(jsonData);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const handleGrr_DESCChange = (event, newValue) => {
    setSelectedGrr_DESC(newValue);
    setSelectMcCode({ mc_code: "" });
  };

  const handlemcChange = (event, newValue) => {
    setSelectMcCode(newValue);
  };

  const handleSave = async () => {
    try {
      if (!selectedGrr_DESC) {
        alert("Machine Code cannot be empty");
        return;
      }

      const newData = {
        mc_code: selectmccode.mc_code,
        grr_desc: selectedGrr_DESC.grr_desc,
        plan: SelectDateplan,
      };

      // Send the newData object to your backend
      const response = await axios.post(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_smart_matchine_grr
        }/add_grr`,
        newData
      );

      console.log("Data added successfully:", response.data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your data has been added successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      handleClose();
      refreshdata();
    } catch (error) {
      console.error("Error adding data:", error);
      refreshdata();
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      distinctMasterGrr();
    } else {
      setSelectedGrr_DESC({ grr_desc: "" });
      setSelectMcCode({ mc_code: "" });
      setSelectDateplan("");
      refreshdata();
    }
  }, [open]);

  useEffect(() => {
    if (selectedGrr_DESC.grr_desc !== "") {
      // alert("selectedGrr_DESC:", selectedGrr_DESC);
      featchDistinctMc_Code();
    }
  }, [selectedGrr_DESC]);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          backgroundColor: "#3498DB",
          "&:hover": {
            backgroundColor: "#2471A3",
          },
          borderRadius: 2.5,
        }}
      >
        <AddCircleIcon sx={{ mr: 1, height: 20, width: 20 }} />
        ADD
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ m: 0, p: 2, zIndex: 1001 }}
      >
        <DialogTitle>
          <Chip
            label="Add GR&R"
            sx={{
              fontSize: 23,
              fontWeight: "bold",
              backgroundColor: "#E8DAEF",
            }}
          />
        </DialogTitle>
        <DialogContent sx={{ padding: "auto", minWidth: "auto" }}>
          {/* GRR_Desc Autocomplete  */}
          <Grid item xs={12} sx={{ mt: 1 }}>
            <Autocomplete
              value={selectedGrr_DESC}
              onChange={handleGrr_DESCChange}
              options={masterGrrList}
              getOptionLabel={(option) => option && option.grr_desc}
              // isOptionEqualToValue={(option, value) => option === value}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="GR&R Desc"
                  size="small"
                  InputLabelProps={{ sx: { fontSize: "16px" } }}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <EditNoteIcon sx={{ color: "#566573" }} />
                      </InputAdornment>
                    ),
                    sx: { width: "100%" },
                  }}
                />
              )}
            />
          </Grid>

          {/* MC Code Autocomplete */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Autocomplete
              value={selectmccode}
              // onInputChange={(event, newValue) => {
              //   setAddGrr({
              //     ...addGrr,
              //     mc_code: newValue,
              //   });
              // }}
              options={distinctmccode}
              getOptionLabel={(option) => option && option.mc_code}
              onChange={handlemcChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="MC Code"
                  size="small"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: <EditNoteIcon sx={{ color: "#ABB2B9" }} />,
                  }}
                />
              )}
            />
          </Grid>

          {/* PLAN */}
          <Grid item xs={12}>
            <InputLabel sx={{ fontSize: "13px", mt: 1 }}>Plan</InputLabel>
            <DatePicker
              size="large"
              showTime={{ format: "HH:mm" }}
              format={"YYYY-MM-DD HH:mm"}
              onChange={(date, dateString) => setSelectDateplan(dateString)}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleSave();
            }}
            variant="contained"
            sx={{
              fontSize: 12,
              backgroundColor: "#73C6B6",
              "&:hover": { backgroundColor: "#3D8D73" },
            }}
          >
            ADD
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              fontSize: 12,
              width: "6%",
              backgroundColor: "#EC7063",
              "&:hover": { backgroundColor: "#AF4834" },
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddNewGrr;
