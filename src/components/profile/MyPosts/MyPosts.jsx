import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength25 = maxLengthCreator(25);
const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="addPostsText"
          placeholder={"Enter post name"}
          validate={[requiredField, maxLength25]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({form: 'addPost'})(MyPostsForm);

export const MyPosts = (props) => {

  const posts = props.posts.map(e => {
    return <Post
      key={e.id}
      message={e.message}
      likesCount={e.likesCount}
    />
  });

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <MyPostsReduxForm
        onSubmit={props.onSubmitAddPost}
      />
      <div className={s.posts}>{posts}</div>
    </div>
  );
};
