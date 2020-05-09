import {ADD_NEW_POST, CHANGE_FRIENDSHIP_STATUS, INPUT_CHANGE_HANDLER, SEND_MESSAGE, SET_USERS} from "./actionTypes";

export const sendMessageActionCreator = () => {
  return {type: SEND_MESSAGE}
}

export const inputChangeHandlerActionCreator = (event) => {
  return {type: INPUT_CHANGE_HANDLER, event}
}

export const addPostActionCreator = () => {
  return {type: ADD_NEW_POST}
}

export const changeFriendshipAC = (userId) => {
  return {type: CHANGE_FRIENDSHIP_STATUS, userId}
}

export const setUsersAC = (users) => {
  return {type: SET_USERS, users}
}