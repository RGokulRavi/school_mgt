import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Button, Card, Divider, IconButton } from "@mui/material";
import "./styles.css";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "code", headerName: "Code", width: 50 },
//   { field: "createdBy", headerName: "Created By", width: 50 },
//   {
//     field: "actions",
//     headerName: "Actions",
//     width: 100,
//     renderCell: (params) => (
//       (
//         <IconButton
//           component={Link}
//           // to={`/student/view/${params.row.id}`}
//           variant="outlined"
//           color="primary"
//         >
//           <EditIcon />
//         </IconButton>
//       ),
//       (
//         <IconButton
//           component={Link}
//           // to={`/student/view/${params.row.id}`}
//           variant="outlined"
//           color="primary"
//         >
//           <DeleteIcon />
//         </IconButton>
//       )
//     ),
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     avatar:
//       "data:image/jpeg;base64,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",
//     lastName: "Snow",
//     firstName: "Jon",
//     age: 35,
//     fees: "Paid",
//     class: "XI",
//     section: "A",
//   },
//   {
//     id: 2,
//     avatar:
//       "data:image/jpeg;base64,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",
//     lastName: "Lannister",
//     firstName: "Cersei",
//     age: 42,
//     fees: "Paid",
//     class: "X",
//     section: "A",
//   },
//   {
//     id: 3,
//     avatar:
//       "data:image/jpeg;base64,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",
//     lastName: "Lannister",
//     firstName: "Jaime",
//     age: 45,
//     fees: "Paid",
//     class: "XI",
//     section: "C",
//   },
//   {
//     id: 4,
//     avatar:
//       "data:image/jpeg;base64,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",
//     lastName: "Stark",
//     firstName: "Arya",
//     age: 16,
//     fees: "Unpaid",
//     class: "XI",
//     section: "A",
//   },
//   {
//     id: 5,
//     lastName: "Targaryen",
//     firstName: "Daenerys",
//     age: 30,
//     fees: "Paid",
//     class: "XI",
//     section: "B",
//   },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150, fees: "Paid" },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, fees: "Paid" },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, fees: "Paid" },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, fees: "Unpaid" },
// ];

export default function DataTable({ rows, columns }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Card
        sx={{
          width: "fit-content",
          padding: 3,
          borderRadius: 3,
          marginTop: 3,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
        {/* </div> */}
      </Card>
    </div>
  );
}
