import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./darkmode/dark.scss";
import "./UserEditForm.css";
import { DarkModeContext } from "./darkmode/DarkModeContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function UserEditForm(props) {
  const token = sessionStorage.getItem("token");
  const notify = (e) => toast(e);
  const { darkMode } = useContext(DarkModeContext);
  const [successfull, setSuccessfull] = useState(false);
  const [data, setData] = useState({
    email: "",
    username: "",
    mobileNumber: "",
    password: "",
    role: ""
  });
  const { email, username, mobileNumber, password } = data;
  useEffect(() => {
    const url = window.location.href;
    const lastSegment = url.substring(url.lastIndexOf("/") + 1);
    console.log(lastSegment);
    axios
      .get("http://localhost:8080/admin/user/" + lastSegment, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data) {
          setData({
            email: res.data.email,
            username: res.data.username,
            mobileNumber: res.data.mobileNumber,
            password: "",
            role: res.data.role
          });
        } else {
          window.alert("User doesn't exist");
          window.location.href = "/admin";
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .put("http://localhost:8080/admin/userEdit/" + data.email, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data) {
          notify("User details are successfully updated");
          setSuccessfull(true);
        } else {
          notify("Username already exists");
        }
      });
  };
  if (successfull) {
    return <Navigate to="/admin" />;
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="editUser">
        <h1 className="newUserTitle">Edit User</h1>
        <form
          name="userdetails-form"
          className="editUserForm"
          onSubmit={submitHandler}
        >
          <div className="editUserItem">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              id="username"
              name="username"
              defaultValue={username}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="editUserItem">
            <label>Email</label>
            <input
              type="string"
              disabled={true}
              placeholder="Enter Email ID"
              id="email"
              name="email"
              defaultValue={email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="editUserItem">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              name="password"
              defaultValue={password}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="editUserItem">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              id="mobileNumber"
              name="mobileNumber"
              defaultValue={mobileNumber}
              onChange={changeHandler}
              required
            />
          </div>
          <button
            className="editUserButton"
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
