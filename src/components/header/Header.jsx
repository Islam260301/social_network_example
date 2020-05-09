import React from 'react';
import logo from '../../assets/img/logo.png';
import s from './Header.module.css'

export const Header = () => {
  return (
    <header className={s.header}>
        <img className={s.logo} src={logo} alt="Logo"></img>
      </header>
  )
}