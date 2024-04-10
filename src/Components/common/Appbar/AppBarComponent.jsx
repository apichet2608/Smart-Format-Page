// AppBarComponent.js
import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { sidebarItems_report, getPageTitle } from "./sidebarItems";
import { NavLink, useLocation } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useTheme } from "next-themes";

const drawerWidth = 240;
// zIndex: theme.zIndex.drawer + 1,

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  // ตั้งค่าการเปลี่ยนแปลงสำหรับเมื่อ drawer เปิด/ปิด
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBarComponent({
  open,
  handleDrawerOpen,
  isDarkMode,
}) {
  const location = useLocation();
  const response = getPageTitle(location.pathname);
  const { resolvedTheme } = useTheme();

  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{
        bgcolor: resolvedTheme === "dark" ? "#0f0f0f" : "#89CFF3", // Use the CSS variable for background color
        color: resolvedTheme === "dark" ? "#f0f0f0" : "#313131",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            color: "white",
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <div className="flex gap-2 w-full justify-between">
          <div className=" justify-start my-auto">
            <div className=" text-xl font-semibold">{response}</div>
          </div>
          <div className=" justify-end">
            <ThemeSwitch />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
