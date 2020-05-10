import React from "react";
import styles from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = (props) => {

  return (
    <div className={styles.main_content}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  );
};
