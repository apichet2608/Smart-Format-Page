import React from "react";
import ListItem from "./ListItem";
import TitleDrawer from "./TitleDrawer";

import DashboardIcon from "../../../../public/Icon/Common/icons8-dashboard-96.png";
import ReportIcon from "../../../../public/Icon/Common/report.png";
import IOT from "../../../../public/Icon/Common/iot.png";
import SMF from "../../../../public/Icon/Common/industry-40.png";
import Working from "../../../../public/Icon/Common/Working.png";

function ListButton({ closeDrawer }) {
  return (
    <ul className="menu px-4 py-0 w-80 min-h-full bg-base-200 text-base-content rounded-r-xl ">
      <TitleDrawer closeDrawer={closeDrawer} />
      <div className="mt-2"></div>
      <ListItem
        iconPaths={[{ img: Working }]}
        title="Working"
        links={[{ path: "/scan_gr_r", label: "Scan GR&R" }]}
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
