import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./darkmode/dark.scss";
import "./AddUser.css";
import Navbar from "./Navbar";
import { DarkModeContext } from "./darkmode/DarkModeContext";

export default function AddUser() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />
    <div className="newUser" style={{ height: 669 }}>
      <h1 className="newUserTitle">Add New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Enter Your Username" id="username"/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Enter Your Email ID" id="email"/>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="Enter Your Password" id="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="Enter Your Phone Number" id="mobileNumber"/>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Enter Your Address" />
        </div>          
        <button className="newUserButton">Create</button>
      </form>
    </div>
    </div>
  );
}