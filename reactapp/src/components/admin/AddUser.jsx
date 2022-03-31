import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./darkmode/dark.scss";
import "./AddUserForm.css";
import AddUserForm from "./AddUserForm";
import Navbar from "./Navbar";
import { DarkModeContext } from "./darkmode/DarkModeContext";
import { flexbox } from "@mui/system";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function AddUser() {
  
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div>
      <Navbar />
      <div className="add_user">
      <AddUserForm />
      </div>
      <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
}