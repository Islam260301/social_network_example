import React from "react";
import styles from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = (props) => {

  return (
    <div className={styles.main_content}>
      <ProfileInfo/>
      <MyPosts
        posts={props.data.posts}
        addPostsText={props.data.addPostsText}
        dispatch={props.dispatch}
      />
    </div>
  );
};
