import React from 'react';
import s from './users.module.css'
import staticUserPhoto from '../../assets/img/userPhoto.png'
import {Preloader} from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";

export const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount && i <= 10; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div className={s.pagination}>
        {pages.map(p => {
          return (
            <button
              key={p}
              className={props.currentPage === p ? s.selectedPage : null}
              onClick={() => props.onPageChanged(p)}>{p}</button>
          )
        })}
      </div>
      {props.inProgress ? <Preloader class={s.loading}/> : props.users.map(u => {
        return (
          <div key={u.id}>
            <span>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small ? u.photos.small : staticUserPhoto}
                  className={s.userPhoto}
                  alt={u.fullName + "`s photo"}
                />
              </NavLink>
              <button
                onClick={() => props.changeFriendship(u.id)}>
                {u.followed ? "UnFollow" : "Follow"}
              </button>
            </span>
            <span>
              <span>
                <span>
                  <h3>Name: {u.name}</h3>
                  {u.status ? <p>Status: {u.status}</p> : null}
                </span>
                <span>
                  <h4>{"u.location.country"}</h4>
                  <h4>{"u.location.city"}</h4>
                </span>
              </span>
            </span>
            <hr/>
          </div>
        )
      })}
      <button onClick={props.setUsers}>Show More</button>
    </div>
  )
}