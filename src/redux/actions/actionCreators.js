import {
  ADD_NEW_POST,
  CHANGE_FRIENDSHIP_STATUS,
  INPUT_CHANGE_HANDLER,
  SEND_MESSAGE,
  SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT,
  SET_USERS
} from "./actionTypes";

export const sendMessageAC = () => {
  return {type: SEND_MESSAGE}
}

export const inputChangeHandlerAC = (event) => {
  return {type: INPUT_CHANGE_HANDLER, event}
}

export const addPostAC = () => {
  return {type: ADD_NEW_POST}
}

export const changeFriendshipAC = (userId) => {
  return {type: CHANGE_FRIENDSHIP_STATUS, userId}
}

export const setUsersAC = (users) => {
  return {type: SET_USERS, users}
}

export const setCurrentPageAC = (currentPage) => {
  return {type: SET_CURRENT_PAGE, currentPage}
}

export const setTotalUsersCount = (count) => {
  return {type: SET_TOTAL_USERS_COUNT, count}
}

