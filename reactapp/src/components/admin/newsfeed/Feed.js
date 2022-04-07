import React, {useState, useEffect, useContext } from "react";
import "./Post.css";
import Post from './Post';
import axios from 'axios';
import "../darkmode/dark.scss"
import { DarkModeContext } from "../darkmode/DarkModeContext";
import Navbar from "../Navbar";

const Feed = () => {
  const { darkMode } = useContext(DarkModeContext);
  const token = sessionStorage.getItem("token");
  const [data,setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:8080/admin/image',{
      headers: { Authorization: `Bearer ${token}` },
    }).then(
      (res) => {
        setData(res.data);
      }
    )
  });

  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />
    <div>
      <div className="main">
        {
          data.map(
            (item) => <Post
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
    </div>
  );
};

export default Feed;