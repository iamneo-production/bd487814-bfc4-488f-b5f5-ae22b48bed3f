import React, { useState } from "react";
import UserImg from "../admin/newsfeed/user.png";
import "./UserFeed.css";
import "../admin/newsfeed/Comment.css";
import axios from "axios";

const AddComment = (props) => {
  const [commentData, setCommentData] = useState("");
  const token = sessionStorage.getItem("token");

  const submitHandler = (e) => {
    setCommentData("");
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/image/${props.imageId}`,
        {
          userId: { email: localStorage.getItem("userEmail") },
          comment: commentData,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <>
      <div className="userfeed__addcomment">
        <div className="comment__userImg">
          <img src={UserImg} alt="" />
        </div>
        <div className="userfeed__commentbox">
          <form onSubmit={submitHandler} className="userfeed__form">
            <input
              className="userfeed__input"
              placeholder="Add your comment..."
              onChange={(e) => setCommentData(e.target.value)}
              value={commentData}
              type="text"
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddComment;
