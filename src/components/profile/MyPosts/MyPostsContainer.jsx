import {MyPosts} from "./MyPosts";
import {
  addPostAC,
  addPostActionCreator,
  inputChangeHandlerAC,
  inputChangeHandlerActionCreator
} from "../../../redux/actions/actionCreators";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    addPostsText: state.profilePage.addPostsText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostAC()),
    onChangeHandler: (event) => dispatch(inputChangeHandlerAC(event))
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);





