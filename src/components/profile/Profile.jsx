import React from "react";
import styles from './Profile.module.css';
import { MyPosts } from "./MyPosts/MyPosts";
import { Post } from "./MyPosts/Post/Post";


export const Profile = () => {
  return (
    <div className={styles.main_content}>
      <div>ava + description</div>
      <MyPosts/>
      <Post message="Hi, it`s my first post."/>
      <Post message="My name is Isuntai."/>
      <Post message="Examole website is making."/>
    </div>
  );
};
