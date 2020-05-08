import React from 'react';
import {Dialogs} from "./Dialogs";
import {inputChangeHandlerActionCreator, sendMessageActionCreator} from "../../redux/actions/actionCreators";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return{
    dialogsData: state.dialogPage.dialogsData,
    messagesData: state.dialogPage.messagesData,
    sendMessageText: state.dialogPage.sendMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageActionCreator()),
    onChangeHandler: (event) => dispatch(inputChangeHandlerActionCreator(event))
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)