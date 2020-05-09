import React from 'react';
import s from './users.module.css'

export const Users = (props) => {
  return (
    <div>
      {props.users.map(u => {
        return (
          <div>
            <span>
              <img
                src={u.userPhoto}
                className={s.userPhoto}
                alt={u.fullName + "`s photo"}
              />
              <button
                onClick={() => props.changeFriendship(u.userId)}>
                {u.friendship ? "UnFollow" : "Follow"}
              </button>
            </span>
            <span>
              <span>
                <span>
                  <h3>{u.fullName}</h3>
                  <p>{u.status}</p>
                </span>
                <span>
                  <h4>{u.location.country}</h4>
                  <h4>{u.location.city}</h4>
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