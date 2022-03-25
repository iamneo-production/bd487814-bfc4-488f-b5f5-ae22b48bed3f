import React from "react";
// import { Link } from "react-router-dom";
import "./Admin.scss";
import "./darkmode/dark.scss";
import { DarkModeContext } from "./darkmode/DarkModeContext";
import Navbar from "./Navbar";
import { useContext } from "react";

//Home page at admin side
function Admin() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />
    </div>
  );
}

export default Admin;
