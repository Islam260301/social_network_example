import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = (props) => {

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="addPostsText" value={props.addPostsText} onChange={props.inputChangeHandler}/>
        </div>
        <div>
          <button onClick={props.addPost}>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          {props.posts.map(e => {
            return(
              <Post
                key={e.id}
                message={e.message}
                likesCount={e.likesCount}/>
            )
          })}
        </div>
      </div>
  );
};
