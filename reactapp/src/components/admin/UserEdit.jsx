import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import "./darkmode/dark.scss";
import "./UserEditForm.css";
import UserEditForm from "./UserEditForm";
import Navbar from "./Navbar";
import { DarkModeContext } from "./darkmode/DarkModeContext";

export default function UserEdit() {
  const { darkMode } = useContext(DarkModeContext);
  if (!sessionStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div>
        <Navbar />
        <div className="edit_user">
          <UserEditForm />
        </div>
      </div>
    </div>
  );
}
