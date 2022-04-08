import React from "react";
import "./Comment.css";
import UserImg from "./user.png";

const Comment = (props) => {
  return (
    <>
      <div className="comment">
        <div className="comment__userImg">
          <img src={UserImg} alt="" />
        </div>
        <div className="comment__text">
          <div className="comment__username">{props.username}</div>
          <div>{props.comment}</div>
        </div>
      </div>
    </>
  );
};

export default Comment;
