import React, {useState, useEffect} from "react";
import "../admin/newsfeed/Post.css";
import UserPost from './UserPost';
import axios from 'axios';
import { Navigate } from "react-router-dom";

const UserFeed = () => {

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

  if (!(sessionStorage.getItem("token"))) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
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
