import React from 'react';
import logo from '../../assets/img/logo2.png';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
  return (
    <header className={s.header}>
        <img className={s.logo} src={logo} alt="Logo"></img>
      <div className={s.login_block}>
        <NavLink to="/login">Login</NavLink>
      </div>
      </header>
  )
}