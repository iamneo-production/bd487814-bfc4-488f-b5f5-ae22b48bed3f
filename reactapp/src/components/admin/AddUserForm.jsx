import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./darkmode/dark.scss";
import "./AddUserForm.css";
import Navbar from "./Navbar";
import { DarkModeContext } from "./darkmode/DarkModeContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function AddUserForm() {
  const notify = (e) => toast(e);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="newUser">
        <h1 className="newUserTitle">Add New User</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Your Username"
              id="username"
              required
            />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Your Email ID"
              id="email"
              required
            />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              id="password"
              required
            />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              id="mobileNumber"
              required
            />
          </div>
          <div className="newUserItem">
            <label>Role</label>
            <div>
              <span className="user_role">
                <input type="radio" name="role" id="user" value="user" />
                <label for="user">user</label>
              </span>
              <span className="user_role">
                <input type="radio" name="role" id="admin" value="admin" />
                <label for="admin">admin</label>
              </span>
            </div>
          </div>
          <button
            className="newUserButton"
            onClick={notify("Added successfully")}
          >
            Create
          </button>
        </form>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}
