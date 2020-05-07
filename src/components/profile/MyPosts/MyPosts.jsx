import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostActionCreator, inputChangeHandlerActionCreator} from "../../../redux/state";

export const MyPosts = (props) => {

  const posts = props.posts.map(e => {
    return <Post
      key={e.id}
      message={e.message}
      likesCount={e.likesCount}
    />
  })

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const onChangeHandler = (event) => {
    props.dispatch(inputChangeHandlerActionCreator(event))
  }
  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            name="addPostsText"
            id="profilePage"
            value={props.addPostsText}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
};
