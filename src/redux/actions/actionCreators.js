import {
  ADD_NEW_POST,
  CHANGE_FRIENDSHIP_STATUS, CHANGE_LOAD,
  INPUT_CHANGE_HANDLER,
  SEND_MESSAGE,
  SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USER_PROFILE,
  SET_USERS
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

export const changeFriendship = (userId) => {
  return {type: CHANGE_FRIENDSHIP_STATUS, userId}
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

export const changeLoad = (loadState) => {
  return {type: CHANGE_LOAD, loadState}
}

export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile}
}

