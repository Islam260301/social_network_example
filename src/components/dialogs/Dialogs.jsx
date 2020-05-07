import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {inputChangeHandlerActionCreator, sendMessageActionCreator} from "../../redux/state";

export const Dialogs = (props) => {

  const dialogItems = props.data.dialogsData.map(e => <DialogItem name={e.name} id={e.id}/>)
  const messages = props.data.messagesData.map(e => <Message message={e.message}/>)

  const sendMessage = () => {
    props.dispatch(sendMessageActionCreator())
  }

  const inputChangeHandler = (event) => {
    props.dispatch(inputChangeHandlerActionCreator(event))
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        {dialogItems}
      </div>
      <div className={s.messages}>
        {messages}
        <textarea
          name="sendMessageText"
          id="dialogPage"
          value={props.data.sendMessageText}
          onChange={inputChangeHandler}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}