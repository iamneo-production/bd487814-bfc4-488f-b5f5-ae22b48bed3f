import React, { useState, useEffect, useContext } from "react";
import "../admin/newsfeed/Post.css";
import UserPost from "./UserPost";
import axios from "axios";
import { Navigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import "./darkmode/dark.scss";
import { DarkModeContext } from "../admin/darkmode/DarkModeContext";

const UserFeed = () => {
  const { darkMode } = useContext(DarkModeContext);
  const token = sessionStorage.getItem("token");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/image", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setData(res.data);
      });
  });

  if (!sessionStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <UserNavbar />
      <div>
        <div className="main">
          {data.map((item) => (
            <UserPost
              imageId={item.imageId}
              imageName={item.imageName}
              imageTag={item.imageTag}
              username={item.userId.username}
              comments={item.comments}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserFeed;
