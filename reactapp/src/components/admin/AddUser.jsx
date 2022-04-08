import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import "./darkmode/dark.scss";
import "./AddUserForm.css";
import AddUserForm from "./AddUserForm";
import Navbar from "./Navbar";
import { DarkModeContext } from "./darkmode/DarkModeContext";
import "react-toastify/dist/ReactToastify.css";

export default function AddUser() {
  const { darkMode } = useContext(DarkModeContext);
  if (!sessionStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div>
        <Navbar />
        <div className="add_user">
          <AddUserForm />
        </div>
      </div>
    </div>
  );
}
