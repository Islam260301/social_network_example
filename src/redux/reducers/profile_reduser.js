import {ADD_NEW_POST, INPUT_CHANGE_HANDLER} from "../actions/actionTypes";

let initialState = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It`s my first post", likesCount: 11},
  ],
  addPostsText: ""
}

export const profileReducer = (state= initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      debugger;
      let newPost = {
        id: state.posts[state.posts.length - 1].id + 1,
        message: state.addPostsText,
        likesCount: 0
      }
      let stateCopy = {...state}
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      stateCopy.addPostsText = ""
      return stateCopy
    }
    case INPUT_CHANGE_HANDLER: {
      let text = action.event.target.value
      let stateCopy = {...state}
      stateCopy.addPostsText = text
      return stateCopy
    }
    default:
      return state;
  }
}