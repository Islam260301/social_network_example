import {
  ADD_NEW_POST,
  CHANGE_LOAD, FOLLOW_USER,
  INPUT_CHANGE_HANDLER,
  SEND_MESSAGE,
  SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USER_DATA, SET_USER_PROFILE,
  SET_USERS, TOGGLEFOLLOWING, UNFOLLOW_USER
} from "./actionTypes";

export const sendMessage = () => {
  return {type: SEND_MESSAGE}
}

export const onChangeHandler = (event) => {
  return {type: INPUT_CHANGE_HANDLER, event}
}

export const addPost = () => {
  return {type: ADD_NEW_POST}
}

export const setUsers = (users) => {
  return {type: SET_USERS, users}
}

export const setCurrentPage = (currentPage) => {
  return {type: SET_CURRENT_PAGE, currentPage}
}

export const setTotalUsersCount = (count) => {
  return {type: SET_TOTAL_USERS_COUNT, count}
}

export const toggleIsFetching = (loadState) => {
  return {type: CHANGE_LOAD, loadState}
}

export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile}
}

export const setAuthUserData = ({id, login, email}) => {
  return {type: SET_USER_DATA, data: {id, login, email}}
}

export const follow = (userId) => {
  return {type: FOLLOW_USER, userId}
}

export const unFollow = (userId) => {
  return {type: UNFOLLOW_USER, userId}
}

export const toggleFollowingInProgress = (isInProgress) => {
  return {type: TOGGLEFOLLOWING, isInProgress}
}

