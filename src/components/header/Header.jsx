import React from 'react';
import logo from '../../assets/img/logo2.png';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props) => {
  return (
    <header className={s.header}>
        <img className={s.logo} src={logo} alt="Logo"></ img>
      {props.isAuth ?  <div><p>{props.profile.fullName || ""}</p><button onClick={props.logout}>logout</button> </div> :
        <NavLink to="/login">Login</NavLink>}
      </header>
  )
}