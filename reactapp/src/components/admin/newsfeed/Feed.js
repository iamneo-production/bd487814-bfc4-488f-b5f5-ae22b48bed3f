import React, {useState, useEffect} from "react";
import "./Post.css";
import Post from './Post';
import axios from 'axios';

const Feed = () => {

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
  );
};

export default Feed;