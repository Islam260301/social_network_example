import React from "react";
import styles from '../styles/Navbar.module.css';
import { NavLink } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Profile</li>
        <li><NavLink to='characters'>Characters</NavLink></li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
};
