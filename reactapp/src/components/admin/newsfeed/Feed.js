import React, { useState, useEffect, useContext } from "react";
import "./Post.css";
import Post from "./Post";
import axios from "axios";
import "../darkmode/dark.scss";
import { DarkModeContext } from "../darkmode/DarkModeContext";
import Navbar from "../Navbar";
import { Navigate } from "react-router-dom";

const Feed = () => {
  const token = sessionStorage.getItem("token");
  const [data, setData] = useState([]);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/image", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        var i;
        for (i = 0; i < res.data.length; i++) {
          res.data[i]["id"] = i;
        }
        setData(res.data);
      });
  }, []);

  if (!sessionStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />
      <div className="main">
        {data.map((item) => (
          <Post
            imageId={item.imageId}
            imageName={item.imageName}
            imageTag={item.imageTag}
            username={item.userId.username}
            comments={item.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
