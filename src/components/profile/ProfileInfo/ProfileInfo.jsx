import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/preloader/Preloader";
import avatar from '../../../assets/img/avatar.png'
import {ProfileEditStatus} from "./ProfileEditStatus";

export const ProfileInfo = ({profile, status, updateStatus}) => {

  if(!profile) {
    return <Preloader/>
  }else {
    return (
      <div className={s.profileInfo}>
        <div className={s.photo}>
          <img src={profile.photos.large ? profile.photos.large : avatar} alt="foto"/>
        </div>
        <h4><b>{profile.fullName}</b></h4>
        <div>{profile.aboutMe}</div>4
        <ProfileEditStatus status={status} updateStatus={updateStatus}/>
        <p>lookingForAJob: {profile.lookingForAJob.toString()}</p>
        <p><em>{profile.lookingForAJobDescription}</em></p>
        <hr/>
      </div>
    )
  }
}