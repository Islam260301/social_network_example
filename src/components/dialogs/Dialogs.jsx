import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
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
      </div>
    </div>
  )
}