import React from 'react';
import s from './users.module.css'
import * as axios from "axios";
import staticUserPhoto from '../../assets/img/userPhoto.png'

export const Users = (props) => {

  if(props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(res => {
        props.setUsers(res.data.items)
      });
  }

  return (
    <div>
      {props.users.map(u => {
        return (
          <div>
            <span>
              <img
                src={ u.photos.small ? u.photos.small : staticUserPhoto}
                className={s.userPhoto}
                alt={u.fullName + "`s photo"}
              />
              <button
                onClick={() => props.changeFriendship(u.id)}>
                {u.followed ? "UnFollow" : "Follow"}
              </button>
            </span>
            <span>
              <span>
                <span>
                  <h3>{u.name}</h3>
                  <p>{u.status}</p>
                </span>
                <span>
                  <h4>{"u.location.country"}</h4>
                  <h4>{"u.location.city"}</h4>
                </span>
              </span>
            </span>
          </div>
        )
      })}
      <button onClick={props.setUsers}>Show More</button>
    </div>
  )
}