import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import "./darkmode/dark.scss";
import { DarkModeContext } from "./darkmode/DarkModeContext";
import Navbar from "./Navbar";
import Userslist from "./Userslist";
import AddUserForm from "./AddUserForm";
import styled from "styled-components";

const AdminHomeAdduser = styled.div`
  padding: 0%;
  margin: 0 auto;
`;

//Home page at admin side
function Admin() {
  const { darkMode } = useContext(DarkModeContext);
  if (!sessionStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />
      <div className="add_user_main">
        <div className="add_user_component">
          <Userslist />
        </div>
        <AdminHomeAdduser>
          <div>
            <AddUserForm className="add_user_component" />
          </div>
        </AdminHomeAdduser>
      </div>
    </div>
  );
}

export default Admin;
