import React from "react";
import s from "./Post.module.css";
import avatar from "../../../../assets/img/avatar.png";

export const Post = (props) => {
  const {message, likesCount} = props
  return (
    <div className={s.post}>
      <img src={avatar} alt="user`s avatar"/>
      {message}
      <div>
        <span><em>Like: {likesCount}</em></span>
      </div>
    </div>
  );
};
