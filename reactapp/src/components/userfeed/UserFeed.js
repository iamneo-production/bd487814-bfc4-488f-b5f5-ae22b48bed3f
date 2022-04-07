import React, {useState, useEffect, useContext } from "react";
import "../admin/newsfeed/Post.css";
import UserPost from './UserPost';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import "./darkmode/dark.scss";
import { DarkModeContext } from "./darkmode/DarkModeContext";
import UserNavbar from "./UserNavbar";

const UserFeed = () => {

  const token = sessionStorage.getItem("token");
  const [data,setData] = useState([]);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    axios.get('http://localhost:8080/image',{
      headers: { Authorization: `Bearer ${token}` },
    }).then(
      (res) => {
        setData(res.data);
      }
    )
  });

  if (!(sessionStorage.getItem("token"))) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <UserNavbar />
      <div className="main">
        {
          data.map(
            (item) => <UserPost
              imageId={item.imageId}
              imageName={item.imageName}
              imageTag={item.imageTag}
              username={item.userId.username}
              comments={item.comments}
              />
          )
        }
      </div>
    </div>
  );
};

export default UserFeed;
