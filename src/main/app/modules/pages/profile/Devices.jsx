import { useState } from "react";
import MaterialTable from "material-table";

const Devices = ({ id }) => {
  const [columns] = useState([
    { title: "Device Name", field: "name" },
    { title: "Divise OS", field: "surname" },
    { title: "Device ID", field: "birthYear" },
  ]);
  return (
    <MaterialTable
      columns={columns}
      options={{
        toolbar: false,
        emptyRowsWhenPaging: false,
        paging: false,
        actionsColumnIndex: -1,
      }}
      actions={[
        {
          icon: "save",
          tooltip: "Save User",
          // onClick: (event, rowData) => alert("You saved " + rowData.name),
        },
        (rowData) => ({
          icon: "delete",
          tooltip: "Delete User",
          // onClick: (event, rowData) =>
          //   confirm("You want to delete " + rowData.name),
          // disabled: rowData.birthYear < 2000,
        }),
      ]}
    />
  );
};

export default Devices;
