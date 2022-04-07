import React, { useContext, useState } from "react";
// eslint-disable-next-line
import { Link, useLocation, Navigate } from "react-router-dom";
import "./darkmode/dark.scss";
import "./AddUserForm.css";
import { DarkModeContext } from "./darkmode/DarkModeContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function AddUserForm(props) {
  const token = sessionStorage.getItem("token");
  const notify = (e) => toast(e);
  const { darkMode } = useContext(DarkModeContext);
  const [data, setData] = useState({
    email: "",
    username: "",
    mobileNumber: "",
    password: "",
    role: "",
  });
  // eslint-disable-next-line
  const { email, username, mobileNumber, password, role } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // const usePathname = () => {
  //   const location = useLocation();
  //   return location.pathname;
  // };
  //let currentPath = usePathname();
  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(data);
    // if (currentPath === "/admin/userEdit") {
    //   currentPath = currentPath + "/" + data.email;
    // } else if (currentPath === "/admin") {
    //   currentPath = currentPath + "/adduser";
    // }
    //notify(currentPath);
    axios
      .post("http://localhost:8080/admin/adduser", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data) {
          notify("New User Added Successfully");
          window.location.reload();
        } else {
          notify("Username/Email Id already exists");
        }
      });
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="newUser">
        <h1 className="newUserTitle">Add New User</h1>
        <form
          name="userdetails-form"
          className="newUserForm"
          onSubmit={submitHandler}
        >
          <div className="newUserItem">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Your Username"
              id="username"
              name="username"
              value={username}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input
              type="string"
              placeholder="Enter Your Email ID"
              id="email"
              name="email"
              value={email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              id="password"
              name="password"
              value={password}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              id="mobileNumber"
              name="mobileNumber"
              value={mobileNumber}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="newUserItem">
            <label>Role</label>
            <div>
              <span className="user_role">
                <input
                  type="radio"
                  name="role"
                  id="user"
                  value="user"
                  onChange={changeHandler}
                  required
                />
                <label htmlFor="user">user</label>
              </span>
              <span className="user_role">
                <input
                  type="radio"
                  name="role"
                  id="admin"
                  value="admin"
                  onChange={changeHandler}
                  required
                />
                <label htmlFor="admin">admin</label>
              </span>
            </div>
          </div>
          <button
            className="newUserButton"
            type="submit"
            //onClick={() => notify("Operation successfull")}
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}
