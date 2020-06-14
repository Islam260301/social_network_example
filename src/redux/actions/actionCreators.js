import {
  ADD_NEW_POST,
  CHANGE_LOAD, FOLLOW_USER, INITIALIZED,
  LOGIN, LOGOUT,
  SEND_MESSAGE,
  SET_CURRENT_PAGE, SET_STATUS, SET_TOTAL_USERS_COUNT, SET_USER_DATA, SET_USER_PROFILE,
  SET_USERS, TOGGLEFOLLOWING, UNFOLLOW_USER, UPDATE_STATUS
} from "./actionTypes";

export const sendMessage = (sendMessageText) => {
  return {type: SEND_MESSAGE, sendMessageText}
}

export const addPost = (addPostsText) => {
  return {type: ADD_NEW_POST, addPostsText}
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

export const setStatus = (statusText) => {
  return {type: SET_STATUS, statusText}
}

export const updateStatusAC = (statusText) => {
  return {type: UPDATE_STATUS, statusText}
}

export const loginAC = (usersData) => {
  return {type: LOGIN, usersData}
}

export const logoutAC = () => {
  return {type: LOGOUT}
}

export const initializeAppAC = () => {
  return {type: INITIALIZED}
}

