import {ADD_NEW_POST, SET_STATUS, SET_USER_PROFILE} from "../actions/actionTypes";
import {getProfileReq, getStatus, updateStatus} from "../../api/api";
import {setStatus, setUserProfile, updateStatusAC} from "../actions/actionCreators";

let initialState = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It`s my first post", likesCount: 11},
  ],
  profile: {
    fullName: null,
    userId: null
  },
  status: ""
}

export const profileReducer = (state= initialState, action) => {

  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: state.posts[state.posts.length - 1].id + 1,
        message: action.addPostsText,
        likesCount: 0
      }

      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: {...action.profile}
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.statusText
      };

    default:
      return state;
  }
}

export const getUserProfileThunk = (userId) => (dispatch) => {
  getProfileReq(userId).then(data => {
    dispatch(setUserProfile(data))
  })
}

export const getStatusThunk = (userId) => (dispatch) => {
  getStatus(userId).then(data => {
    dispatch(setStatus(data))
  })
}

export const updateStatusThunk = (statusText) => (dispatch) => {
  updateStatus(statusText).then(data => {
    dispatch(updateStatusAC(data))
  })
}