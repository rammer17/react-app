import "devextreme/dist/css/dx.light.css";

import { DataGrid, Column } from "devextreme-react/data-grid";

function Users() {
  const employees = [
    {
      Id: 0,
      FirstName: "Georgi",
      LastName: "Ivanov",
      Age: 19,
      Email: "rammer17@abv.bg",
      IsVerified: true,
      Role: "Moderator",
    },
  ];

  return (
    <DataGrid dataSource={employees}>
      <Column dataField="Id" dataType="number" width={100}></Column>
      <Column dataField="FirstName" dataType="text" width={150}></Column>
      <Column dataField="LastName" dataType="text" width={150}></Column>
      <Column dataField="Age" dataType="number" width={100}></Column>
      <Column dataField="Email" dataType="text" width={250}></Column>
      <Column dataField="IsVerified" dataType="boolean" width={100}></Column>
      <Column dataField="Role" dataType="text" width={150}></Column>
    </DataGrid>
  );
}

export default Users
