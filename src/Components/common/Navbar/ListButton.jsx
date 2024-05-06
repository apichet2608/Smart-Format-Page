import React from "react";
import ListItem from "./ListItem";
import TitleDrawer from "./TitleDrawer";

import DashboardIcon from "../../../../public/Icon/Common/icons8-dashboard-96.png";
import ReportIcon from "../../../../public/Icon/Common/report.png";
import IOT from "../../../../public/Icon/Common/iot.png";
import SMF from "../../../../public/Icon/Common/industry-40.png";
function ListButton({ closeDrawer }) {
  return (
    <ul className="menu px-4 py-0 w-80 min-h-full bg-base-200 text-base-content rounded-r-xl ">
      <TitleDrawer closeDrawer={closeDrawer} />
      <div className="mt-2"></div>
      <ListItem
        iconPaths={[{ img: DashboardIcon }]}
        title="Dashboard"
        links={[
          { path: "/dashboard", label: "Dashboard" },
          { path: "/dashboard2", label: "Dashboard2" },
        ]}
        closeDrawer={closeDrawer}
      />
      <ListItem
        iconPaths={[{ img: ReportIcon }]}
        title="Report"
        links={[
          { path: "/1", label: "Report 1" },
          { path: "/2", label: "Report 2" },
        ]}
        closeDrawer={closeDrawer}
      />
      <ListItem
        iconPaths={[{ img: DashboardIcon }]}
        title="Dashboard"
        links={[
          { path: "/smart_machine_grr_upload", label: "GR&R Upload" },
          { path: "/smart_machine_grr_master_list", label: "Master List" },
        ]}
        closeDrawer={closeDrawer}
      />
      <li></li>
    </ul>
  );
}

export default ListButton;
