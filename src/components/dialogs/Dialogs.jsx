import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";

export const Dialogs = (props) => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        {props.data.dialogsData.map(e => <DialogItem name={ e.name } id={ e.id }/>)}
      </div>
      <div className={s.messages}>
        {props.data.messagesData.map(e => <Message message={ e.message }/>)}
        <textarea
          name="sendMessageText"
          value={props.sendMessageText}
          onChange={props.inputChangeHandler}
        />
        <button onClick={props.sendMessage}>Send</button>
      </div>
    </div>
  )
}