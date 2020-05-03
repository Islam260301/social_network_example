import React from 'react';
import logo from '../img/logo.png';
import styles from '../styles/Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="Logo"></img>
      </header>
  )
}