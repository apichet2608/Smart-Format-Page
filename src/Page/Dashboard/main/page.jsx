import React from "react";
import Content1 from "./Content1";
import AutoCompleteMUI from "../Components/AutoComplete/AutoCompleteMUI";
import TextFieldMUI from "../Components/TextFieldMUI/TextFieldMUI";
import DateMUI from "../Components/DateTimeMUI/DateMUI";
import TableDataMUI from "../Components/TableDataMUI/TableDataMUI";
function page() {
  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 25,
      email: "",
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 35,
      email: "",
    },
    {
      id: 3,
      name: "John Doe",
      age: 25,
      email: "",
    },
    {
      id: 4,
      name: "Jane Doe",
      age: 35,
      email: "",
    },
    {
      id: 5,
      name: "John Doe",
      age: 25,
      email: "",
    },
    {
      id: 6,
      name: "Jane Doe",
      age: 35,
      email: "",
    },
    {
      id: 7,
      name: "John Doe",
      age: 25,
      email: "",
    },
    {
      id: 8,
      name: "Jane Doe",
      age: 35,
      email: "",
    },
    {
      id: 9,
      name: "John Doe",
      age: 25,
      email: "",
    },
    {
      id: 10,
      name: "Jane Doe",
      age: 35,
      email: "",
    },
  ];

  const column = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      width: 110,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      flex: 1,
      editable: true,
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <Content1
          title="Input Components"
          content={
            <>
              <AutoCompleteMUI />
              <TextFieldMUI />
              <DateMUI />
            </>
          }
        />
      </div>
      <div className="mt-2"></div>
      <div className="container mx-auto">
        <Content1
          title="Table Components"
          content={
            <>
              <TableDataMUI datas={data} columns={column} />
            </>
          }
        />
      </div>
    </>
  );
}

export default page;
