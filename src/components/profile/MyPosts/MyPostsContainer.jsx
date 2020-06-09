import {MyPosts} from "./MyPosts";
import {addPost} from "../../../redux/actions/actionCreators";
import {connect} from "react-redux";
import React from "react";
import {reset} from "redux-form";

class MyPostsContainer extends React.Component {

  onSubmitAddPost = (values) => {
    this.props.addPost(values.addPostsText)
    this.props.reset("addPost")
  }

  render() {
    return(
      <MyPosts
        onSubmitAddPost={this.onSubmitAddPost}
        posts={this.props.posts}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}

export default connect(mapStateToProps, {reset, addPost,})(MyPostsContainer);





