import React, {Component} from 'react';
import s from './users.module.css'
import * as axios from "axios";
import staticUserPhoto from '../../assets/img/userPhoto.png'

export class UsersClass extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
        }
      )
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(res => {
          this.props.setUsers(res.data.items)
        }
      );
  }


  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount && i <= 10; i++) {
      pages.push(i)
    }
    return (
      <div>
        <div className={s.pagination}>
          {pages.map(p =>  {
            return (
              <button
                className={this.props.currentPage === p && s.selectedPage}
                onClick={() => this.onPageChanged(p)}
              >{p}</button>
            )
          })}
        </div>
        {this.props.users.map(u => {
          return (
            <div>
            <span>
              <img
                src={u.photos.small ? u.photos.small : staticUserPhoto}
                className={s.userPhoto}
                alt={u.fullName + "`s photo"}
              />
              <button
                onClick={() => this.props.changeFriendship(u.id)}>
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
        <button onClick={this.props.setUsers}>Show More</button>
      </div>
    )
  }
}