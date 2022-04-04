import React, { useState,useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Userslist.css";
//import { columns, rows } from "./Userssource";
import { Link,Navigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function TempUserList(){
  const token = sessionStorage.getItem("token");
  const notify = (e) => toast(e);
  const handleDelete = (email) => {
    axios.delete(`http://localhost:8080/admin/delete/`+email, {
        headers: { Authorization: `Bearer ${token}` },
        })
        .then(res => {
            console.log(res);
            if(res.data.status){
                notify("User deleted successfully");
            }
            else{
                notify("User doesn't exist");
            }
        });
    setData(data.filter((item) => item.email !== email));
    window.location.reload();
  };

  const columns = [
    { field: "username", headerName: "Username", width: 150, textAlign: "center" },
    { field: "email", headerName: "Email", width: 230 },
    { field: "role", headerName: "Role", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/admin/userEdit/"+params.row.email} style={{ textDecoration: "none" }}>
              <div className="editButton">Edit</div>
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

 // const [data, setData] = useState([]);
 var Temp;
 useEffect(() => {
  axios.get("http://localhost:8080/admin", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      var i;
      for (i = 0; i < res.data.length; i++) {
        if (res.data[i]["role"] === "ROLE_ADMIN") {
          res.data[i]["role"] = "ADMIN";
        } else {
          res.data[i]["role"] = "USER";
        }
        Temp = res.data;
      }
    });});
    const [data, setData] = useState(Temp);
    if ((sessionStorage.getItem("token"))) {
        return <Navigate to="/login" />;
      }
  return (
    <div className="userslist" style={{ height: 637 }}>
      <DataGrid
        className="datagrid"
        width={"100%"}
        rows={data}
        columns={columns}
        // pageSize={9}
        // rowsPerPageOptions={[5]
      />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

