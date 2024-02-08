import React, { useState } from "react";

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="">
        <div
          style={{
            width: isOpen ? 240 : 0,
            backgroundColor: "red",
            display: "fixed",
            color: "black",
            height: "100%",
            minHeight: "100vh",
          }}
        >
          {isOpen ? 123 : null}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
