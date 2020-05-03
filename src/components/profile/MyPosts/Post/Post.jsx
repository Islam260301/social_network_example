import React from "react";
import s from "./Post.module.css";
import avatar from "../../../../img/avatar.png";

export const Post = (props) => {
  const {message} = props
  return (
    <div className={s.post}>
      <img src={avatar} alt="user`s avatar" />
      {message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};
