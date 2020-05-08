import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";


export const Dialogs = (props) => {

  const dialogItems = props.dialogsData.map(e => <DialogItem name={e.name} id={e.id}/>)
  const messages = props.messagesData.map(e => <Message message={e.message}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        {dialogItems}
      </div>
      <div className={s.messages}>
        {messages}
        <textarea
          name="sendMessageText"
          value={props.sendMessageText}
          onChange={props.onChangeHandler}
        />
        <button onClick={props.sendMessage}>Send</button>
      </div>
    </div>
  )
}