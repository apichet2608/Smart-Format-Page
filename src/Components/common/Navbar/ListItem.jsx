import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function ListItem({ iconPaths, title, links, closeDrawer }) {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <li className="">
      <details>
        <summary className="group">
          <span>
            {iconPaths.map((path, index) => (
              <img
                key={index}
                src={path.img}
                alt="icon"
                width={"24px"}
                height={"24px"}
              />
            ))}
          </span>
          {title}
        </summary>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={closeDrawer}
                className={
                  currentPath === link.path
                    ? "bg-base-content  text-base-100 hover:bg-base-content hover:text-base-100"
                    : " "
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}

export default ListItem;
