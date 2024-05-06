import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Table_GRR_Master_List from "../components/GRR_Master_lies_table";
import TableMUI from "../components/TableDataMUI/TableDataMUI";
import AutocompleteMUI from "../components/AutoCompleteMUI/AutoCompleteMUI";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GRR_Master_List = () => {
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

  const [distinct_grr_desc, set_distinct_grr_desc] = useState([]);
  const [grr_desc, set_grr_desc] = useState({ grr_desc: "ALL" });
  const [GRR_Master__list_table, setGRR_Master_list_table] = useState([]);

  const fetch_Table_grr_master_list = async () => {
    const params = {
      grr_desc: grr_desc.grr_desc,
    };
    axios
      .get(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_smart_matchine_grr
        }/Master_grr_list_table`,
        {
          params: params,
        }
      )
      .then((response) => {
        setGRR_Master_list_table(response.data);
        console.log("Table GRR Master List: ", response.data);
      })
      .catch((error) => {
        console.error("Error requesting API:", error);
      });
  };

  const fetch_distinct_grr_desc = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_IP_API}${
          import.meta.env.VITE_smart_matchine_grr
        }/distinct_grr_desc`
      );

      set_distinct_grr_desc(response.data);
      console.log("Distinct GRR Desc: ", response.data);
    } catch (error) {
      console.error("Error requesting API:", error);
    }
  };

  const handleGrrDescChange = (event, newvalue) => {
    if (newvalue === null) {
      set_grr_desc({ grr_desc: "ALL" });
    } else {
      set_grr_desc(newvalue);
    }
  };

  useEffect(() => {
    fetch_distinct_grr_desc();
    fetch_Table_grr_master_list();
  }, [grr_desc]);

  const refreshDataGrid = () => {
    fetch_Table_grr_master_list();
  };

  const columns = [
    {
      field: "mc_code",
      headerName: "MC Code",
      width: 150,
      align: "center",
      headerAlign: "center",

      renderCell: (params) => (
        <div style={{ color: "#3498DB", fontWeight: "bold" }}>
          {params.value}
        </div>
      ),
    },

    {
      field: "grr_desc",
      headerName: "GR&R Desc",
      width: 260,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "period_day",
      headerName: "Life Time",
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "update_by",
      headerName: "Update By",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "update_date",
      headerName: "Update Date",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "warning_day",
      headerName: "Warning_day",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-start">
          <AutocompleteMUI
            options={distinct_grr_desc}
            getOptionLabel={(option) => option && option.grr_desc}
            value={grr_desc}
            onChange={handleGrrDescChange}
            label={"Select GR&R Desc"}
          />
        </div>
        <div className="flex justify-center mt-2">
          <TableMUI
            datas={GRR_Master__list_table}
            refreshtable={refreshDataGrid}
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
};

export default GRR_Master_List;
