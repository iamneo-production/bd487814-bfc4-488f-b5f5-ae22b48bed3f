import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Userslist.css";
import { columns, rows } from "./Userssource";
import { Link } from "react-router-dom";

const Userslist = () => {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="userslist" style={{ height: 637 }}>
      <DataGrid
        className="datagrid"
        width={"100%"}
        rows={data}
        columns={columns.concat(actionColumn)}
        // pageSize={9}
        // rowsPerPageOptions={[5]
      />
    </div>
  );
};

export default Userslist;
