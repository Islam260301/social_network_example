import React from 'react';
import s from './users.module.css'
import avatar from '../../assets/img/avatar.png'
import {Preloader} from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";

export const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount && i <= 10; i++) {
    pages.push(i)
  }

  let pagination = <div className={s.pagination}>
    {pages.map(p => {
      return (
        <button
          key={p}
          className={props.currentPage === p ? s.selectedPage : null}
          onClick={() => props.onPageChanged(p)}>{p}
        </button>
      )
    })}
  </div>

  return (
    <div>
      {pagination}
      {props.inProgress ? <Preloader class={s.loading} /> : props.users.map(u => {
        return (
          <div key={u.id}>
            <span>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small ? u.photos.small : avatar}
                  className={s.userPhoto}
                  alt={u.fullName + "`s photo"}
                />
              </NavLink>
              {u.followed ?
                <button
                  disabled={props.isFollowing}
                  onClick={() => props.unFollow(u.id)}>UnFollow
                </button> :
                <button
                  disabled={props.isFollowing}
                  onClick={() => props.follow(u.id)}>Follow
                </button>}
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
            <hr />
          </div>
        )
      })}
      {pagination}
      <button onClick={props.setUsers}>Show More</button>
    </div>
  )
}