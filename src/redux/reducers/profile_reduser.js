import {ADD_NEW_POST, INPUT_CHANGE_HANDLER} from "../actions/actionTypes";

let initialState = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It`s my first post", likesCount: 11},
  ],
  addPostsText: ''
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: state.posts[state.posts.length - 1].id + 1,
        message: state.addPostsText,
        likesCount: 0
      }
      state.posts.push(newPost)
      state.addPostsText = ""
      return state;

    case INPUT_CHANGE_HANDLER:
      let name = action.event.target.name
      state[name] = action.event.target.value
      return state;
    default:
      return state;
  }
}