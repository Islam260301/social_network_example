import {INPUT_CHANGE_HANDLER, SEND_MESSAGE} from "../actions/actionTypes";

let initialState = {
  dialogsData: [
    {id: 1, name: "John"},
    {id: 2, name: "Sofia"},
    {id: 3, name: "Peter"},
    {id: 4, name: "Alex"},
    {id: 5, name: "Ben"},
    {id: 6, name: "Hamlet"},
  ],
  messagesData: [
    {id: 1, message: "Hi!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Amazing, thanks. You?"},
    {id: 4, message: "Me too. Can you today help me?"},
    {id: 5, message: "I think WebStorm more comfortable than VS Code"},
    {id: 6, message: "Yes. (_::_)"},
  ],
  sendMessageText: ""
}

export const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: state.messagesData[state.messagesData.length - 1].id + 1,
        message: state.sendMessageText
      }
      state.messagesData.push(newMessage)
      state.sendMessageText = ""
      break

    case INPUT_CHANGE_HANDLER:
      let name = action.event.target.name
      state[name] = action.event.target.value
      break

    default:
      break
  }
  return state
}