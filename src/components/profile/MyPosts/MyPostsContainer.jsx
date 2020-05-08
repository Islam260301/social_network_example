import React from "react";
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, inputChangeHandlerActionCreator} from "../../../redux/actions/actionCreators";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    addPostsText: state.profilePage.addPostsText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    onChangeHandler: (event) => dispatch(inputChangeHandlerActionCreator(event))
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);





