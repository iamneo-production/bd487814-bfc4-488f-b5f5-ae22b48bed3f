import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import "./darkmode/dark.scss";
import { DarkModeContext } from "./darkmode/DarkModeContext";
import Navbar from "./Navbar";
import Userslist from "./Userslist";

//Home page at admin side
function Admin() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />
      <Userslist />
    </div>
  );
}

export default Admin;
