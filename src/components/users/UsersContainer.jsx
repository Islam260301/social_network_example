import {
  changeFriendshipAC,
  changeLoadAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC
} from "../../redux/actions/actionCreators";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import {Users} from "./Users";


class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
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
          inProgress={this.props.inProgress}
          changeLoad={this.props.changeLoad}
          onPageChanged={this.onPageChanged}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          setUsers={this.props.setUsers}
          currentPage={this.props.currentPage}
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

let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch(setUsersAC(users)),
    changeFriendship: (id) => dispatch(changeFriendshipAC(id)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
    setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count)),
    changeLoad: (loadState) => dispatch(changeLoadAC(loadState))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)