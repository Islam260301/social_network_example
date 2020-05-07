import React from 'react';
import s from '../Navbar.module.css';

export const Friend = (props) => {
  return (
    <div className={s.friend}>
      <img src={props.image} alt="my_friend"/>
      <h5>{props.name}</h5>
    </div>
  )
}