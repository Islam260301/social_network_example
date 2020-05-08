import {ADD_NEW_POST, INPUT_CHANGE_HANDLER, SEND_MESSAGE} from "./actionTypes";

export const sendMessageActionCreator = () => {
  return {type: SEND_MESSAGE}
}

export const inputChangeHandlerActionCreator = (event) => {
  return {type: INPUT_CHANGE_HANDLER, event}
}

export const addPostActionCreator = () => {
  return {type: ADD_NEW_POST}
}