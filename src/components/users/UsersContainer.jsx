import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import {Users} from "./Users";
import {
  changeLoad, follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, unfollow
} from "../../redux/actions/actionCreators";


class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
    })
      .then(res => {
          this.props.changeLoad(false)
          this.props.setUsers(res.data.items)
          this.props.setTotalUsersCount(res.data.totalCount)
        }
      )
    this.props.changeLoad(true)
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      withCredentials: true
    })
      .then(res => {
          this.props.changeLoad(false)
          this.props.setUsers(res.data.items)
        }
      );
    this.props.changeLoad(true)
  }

  render() {
    return (
      <div>
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          inProgress={this.props.inProgress}
          changeLoad={this.props.changeLoad}
          onPageChanged={this.onPageChanged}
          setUsers={this.props.setUsers}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setCurrentPage={this.props.setCurrentPage}
          setTotalUsersCount={this.props.setTotalUsersCount}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    inProgress: state.usersPage.inProgress
  }
}

export default connect(mapStateToProps, {
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  changeLoad
})(UsersContainer)