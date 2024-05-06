import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AddNewGrr from "./Dialog/AddNewGrr";
import { Add, Delete, Edit } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Swal from "sweetalert2";
import axios from "axios";
import FileCell from "./AttachedFileCell/AttachedFileCell";
import MinimizeIcon from "@mui/icons-material/Minimize";
import MainEditGrrDialog from "./Dialog/MainEditGrr";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import TableMUI from "./TableDataMUI/TableDataMUI";
function UploadGrrTable() {
  const handleDeleteTask = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your data has been deleted.",
        icon: "success",
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // User clicked cancel, no further action needed
      return;
    }

    try {
      await axios.delete(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_smart_matchine_grr
        }/${id}`
      );

      console.log("Data deleted successfully");
      refreshDataGrid();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // DOWNLOAD , UPLOAD , DELETE FILE

  const handleUploadAndUpdate = async (event, row) => {
    try {
      const formData = new FormData();
      const timestamp = new Date().getTime(); // Get timestamp
      const fileName = `${timestamp}_${event.target.files[0].name}`; // Append timestamp to the front of the filename
      formData.append("file", event.target.files[0], fileName);
      formData.append("taskId", row.id);

      // Upload or update file based on the presence of the taskId
      const response = await axios.post(
        `${import.meta.env.VITE_IP_API_UPLOAD}${
          import.meta.env.VITE_PATHUPLOAD
        }/upload`,
        formData
      ); // Use relative path

      // Assuming the response contains the file ID, adjust accordingly
      const newFileId = response.data;
      console.log(newFileId); // Do something with the newFileId
      if (response.status === 201) {
        await handleStampWithUpload(row.id);
        refreshDataGrid();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "File uploaded or updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        // alert("File uploaded or updated successfully!");
      } else {
        alert("Error uploading file. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading or updating file:", error);
      alert("Error uploading or updating file. Please try again.");
    }

    // featch after upload
  };
  const handleDownload = (text) => {
    const downloadUrl = `${import.meta.env.VITE_IP_API_UPLOAD}${
      import.meta.env.VITE_PATHDOWLOAD
    }/download/${text}`;
    console.log(downloadUrl);
    window.open(downloadUrl, "_blank");
  };
  // const handleDelete = async (text) => {
  //   try {
  //     // Validate that both id and filename are available
  //     if (!text.id || !text.upload) {
  //       alert("ID and filename are required.");
  //       return;
  //     }

  //     // Send DELETE request to server
  //     const response = await axios.delete(
  //       `${import.meta.env.VITE_IP_API_UPLOAD}${
  //         import.meta.env.VITE_PATHDELETE
  //       }/delete/${text.id}/${text.upload}`
  //     );

  //     // Check if the delete was successful
  //     if (response.status === 200) {
  //       // alert("File deleted successfully!");
  //       Swal.fire({
  //         title: "Are you sure?",
  //         text: "You won't be able to revert this!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes, delete it!",
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "Your file has been deleted.",
  //             icon: "success",
  //           });
  //         }
  //       });
  //       refreshDataGrid();
  //       handleStampWithUpload(text.id);
  //       refreshDataGrid();
  //     } else {
  //       alert("Error deleting file. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting file:", error);
  //     alert("Error deleting file. Please try again.");
  //   }
  //   // featch after delete
  // };

  // UPDATE ACTUAL && STATUS

  const handleDelete = async (text) => {
    try {
      // Validate that both id and filename are available
      if (!text.id || !text.upload) {
        alert("ID and filename are required.");
        return;
      }

      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      // Check if the user confirmed the deletion
      if (result.isConfirmed) {
        // Send DELETE request to server
        const response = await axios.delete(
          `${import.meta.env.VITE_IP_API_UPLOAD}${
            import.meta.env.VITE_PATHDELETE
          }/delete/${text.id}/${text.upload}`
        );

        // Check if the delete was successful
        if (response.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });

          refreshDataGrid();
          handleStampWithUpload(text.id);
        } else {
          alert("Error deleting file. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("Error deleting file. Please try again.");
    }
    // fetch after delete
  };

  const handleStampWithUpload = async (id) => {
    // alert("Stamping actual and status...");
    try {
      await axios.put(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_smart_matchine_grr
        }/${id}`
      );

      console.log("Stamp Actual and Status");
      refreshDataGrid();
    } catch (error) {
      console.error("Error Stamp data:", error.response.data);
    }
  };

  const [DataEdit, setDataEdit] = useState(null);
  const [editdialog, seteditdialog] = useState(false);

  // EDIT TASK MAIN
  const handleEditTask = (row) => {
    console.log(row);
    setDataEdit(row);
    seteditdialog(true);
  };

  const handleClose = () => {
    seteditdialog(false);
    setDataEdit([]);
  };

  const handleClosedialog = () => {
    seteditdialog(false);
  };

  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      width: 120,
      renderCell: (params) => (
        <>
          <IconButton
            width="5px"
            height="5px"
            sx={{ color: "#6495ED" }}
            onClick={() => handleEditTask(params.row)}
          >
            <BorderColorIcon sx={{ width: 20, height: 20 }} />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => handleDeleteTask(params.row.id)}
          >
            <Delete sx={{ width: 20, height: 20, color: "#85929E" }} />
          </IconButton>
        </>
      ),
    },
    {
      field: "create_at",
      headerName: "Create Date",
      width: 180,
    },
    {
      field: "mc_code",
      headerName: "MC Code",
      align: "center",
      width: 120,
    },
    {
      field: "grr_desc",
      headerName: "GR&R Description",
      width: 280,
    },
    {
      field: "life_time",
      headerName: "Life Time",
      width: 100,
      align: "center",
    },
    {
      field: "plan",
      headerName: "Eff. Date",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actual",
      headerName: "Actual Date",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "upload",
      headerName: "Upload",
      width: 110,
      renderHeader: (params) => (
        <div className=" font-bold #334155">Upload File📂</div>
      ),
      renderCell: (params) => (
        <div className="flex items-center justify-center w-full">
          <FileCell
            row={params.row}
            handleFileUpload={handleUploadAndUpdate}
            handleDownload={handleDownload}
            handleDelete={handleDelete}
          />
        </div>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      align: "center",
      headerAlign: "center",
      width: 100,
      renderHeader: (params) => <div className="font-bold #334155">Status</div>,
      renderCell: (params) => {
        const statusValue = params.value;

        if (statusValue === "0") {
          return (
            <div
              style={{
                color: "#0E6655",
                backgroundColor: "#82E0AA",
                borderRadius: 10,
                fontSize: 16,
                width: 80,
                height: 25,
                textAlign: "center",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
              }}
            >
              PASS
            </div>
          );
        } else if (statusValue === "1") {
          return (
            <div
              style={{
                color: "#78281F",
                backgroundColor: "#F1948A",
                borderRadius: 10,
                fontSize: 16,
                width: 80,
                height: 25,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              FAIL
            </div>
          );
        } else if (statusValue === "2") {
          return (
            <div
              style={{
                color: "#AF601A",
                backgroundColor: "#F7DC6F",
                borderRadius: 10,
                fontSize: 16,
                width: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 25,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Ongoing
            </div>
          );
        } else if (statusValue === "") {
          return <MinimizeIcon style={{ color: "#AEB6BF" }} />;
        } else {
          return <MinimizeIcon style={{ color: "#AEB6BF" }} />;
        }
      },
    },
    {
      field: "warning_date",
      headerName: "Warning Date",
      align: "center",
      width: 150,
      headerAlign: "center",

      renderHeader: (params) => (
        <div className=" font-bold #334155">Warning Date</div>
      ),
    },
    {
      field: "next_plan",
      headerName: "Next Plan",
      align: "center",
      width: 150,
      headerAlign: "center",
      renderHeader: (params) => (
        <div className=" font-bold #334155">Next Plan</div>
      ),
    },
  ];

  //   ----------------FETCH TABLE-------------------------------
  const [GRR_table, setGRR_table] = useState([]);

  const fetch_GRRtable = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_smart_matchine_grr
        }/Main_TableGrr`
      );
      const jsonData = await response.json();

      setGRR_table(jsonData);
      console.log("GRR Table:", jsonData);
    } catch (error) {
      console.log("ERROR GRR Table", error);
    }
  };

  useEffect(() => {
    fetch_GRRtable();
  }, []);

  const refreshDataGrid = () => {
    fetch_GRRtable();
  };

  return (
    <div style={{ height: 660, width: "100%" }}>
      <Box sx={{ textAlign: "left", mb: 1 }}>
        <AddNewGrr refreshdata={refreshDataGrid} />
      </Box>

      {/* <DataGrid
        rows={GRR_table}
        columns={columns}
        pagination
        getRowHeight={() => "20"}
        pageSize={5}
        sx={{
          "& .MuiDataGrid-cell": {
            borderRight: "1px solid #e0e0e0",
          },
          "& .MuiDataGrid-columnHeader": {
            borderRight: "1px solid #e0e0e0",
            borderTop: "1px solid #e0e0e0",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F5F5F5",
          },
        }}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      /> */}
      <TableMUI
        datas={GRR_table}
        columns={columns}
        refreshDataGrid={refreshDataGrid}
      />

      <MainEditGrrDialog
        mainedit={DataEdit}
        opens={editdialog}
        func_handleClose={handleClose}
        refreshtable={refreshDataGrid}
        after={handleClosedialog}
        handleFileUpload={handleUploadAndUpdate}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default UploadGrrTable;
