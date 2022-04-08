import React from "react";
import Comment from "./Comment";

const Comments = (props) => {
  return (
    <div>
      {props.comments.map((item) => (
        <Comment
          username={item.userId.username}
          comment={item.comment}
          key={item.commentId}
        />
      ))}
    </div>
  );
};

export default Comments;
