import React from 'react';
import s from './ProfileInfo.module.css';
import foto from '../../../assets/img/foto.png'

export const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div className={s.photo}>
        <img src={foto} alt="foto"/>
      </div>
      <div>ava + description</div>
    </div>
  )
}