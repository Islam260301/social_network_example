import {ADD_NEW_POST, INPUT_CHANGE_HANDLER, SET_USER_PROFILE} from "../actions/actionTypes";

let initialState = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It`s my first post", likesCount: 11},
  ],
  profile: null,
  addPostsText: ""
}

export const profileReducer = (state= initialState, action) => {

  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: state.posts[state.posts.length - 1].id + 1,
        message: state.addPostsText,
        likesCount: 0
      }

      return {
        ...state,
        posts: [...state.posts, newPost],
        addPostsText: ""
      };
    case INPUT_CHANGE_HANDLER:

      return {
        ...state,
        addPostsText: action.event.target.value
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    default:
      return state;
  }
}