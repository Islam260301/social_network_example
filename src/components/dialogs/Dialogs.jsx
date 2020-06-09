import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);


const AddMessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="sendMessageText"
        placeholder={"Message"}
        validate={[requiredField, maxLength30]}
      />
      <button>Send</button>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({
  form: 'dialogs' // a unique name for this form
})(AddMessageForm);

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
        <AddMessageReduxForm onSubmit={props.sendMessage}/>
      </div>
    </div>
  )
}