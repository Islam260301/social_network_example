import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
  return(
    <div key={props.id} className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  )
}