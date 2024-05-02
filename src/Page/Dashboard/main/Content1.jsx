import React from "react";

function Content1(props) {
  const { title, content } = props;
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 xl:col-span-12 bg-base-200 p-8 rounded-2xl">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-base-content mt-4 grid grid-cols-1 gap-2">
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

export default Content1;
