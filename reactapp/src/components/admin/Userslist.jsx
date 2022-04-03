import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Userslist.css";
//import { columns, rows } from "./Userssource";
import { Link } from "react-router-dom";
import axios from "axios";

const Userslist = () => {
  const token = sessionStorage.getItem("token");
  const columns = [
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 230 },
    { field: "role", headerName: "Role", width: 120 },
  ];

  const [data, setData] = useState([]);

  //var rows = [];
  axios
    .get("http://localhost:8080/admin", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      var i;

      for (i = 0; i < res.data.length; i++) {
        res.data[i]["id"] = i;

        if (res.data[i]["role"] === "ROLE_ADMIN") {
          res.data[i]["role"] = "ADMIN";
        } else {
          res.data[i]["role"] = "USER";
        }
      }

      setData(res.data);
    });

  const handleDelete = (email) => {
    setData(data.filter((item) => item.email !== email));
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
              onClick={() => handleDelete(params.row.email)}
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
