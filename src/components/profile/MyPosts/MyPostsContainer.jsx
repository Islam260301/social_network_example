import {MyPosts} from "./MyPosts";
import {addPost, onChangeHandler} from "../../../redux/actions/actionCreators";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    addPostsText: state.profilePage.addPostsText
  }
}

export const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  onChangeHandler
})(MyPosts);





