import React from 'react';
import s from './users.module.css'
import staticUserPhoto from '../../assets/img/userPhoto.png'

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
          return(
            <button
              key={p}
              className={props.currentPage === p ? s.selectedPage : null}
              onClick={ () => props.onPageChanged(p)}>{p}</button>
          )
        })}
      </div>
      {props.users.map(u => {
        return (
          <div key={u.id}>
            <span>
              <img
                src={u.photos.small ? u.photos.small : staticUserPhoto}
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