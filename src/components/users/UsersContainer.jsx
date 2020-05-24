import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleFollowingInProgress,
  toggleIsFetching, unFollow
} from "../../redux/actions/actionCreators";
import {followThunk, getUsersThunk, unFollowThunk} from "../../redux/reducers/users_reducer";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsersThunk(pageNumber, this.props.pageSize)
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
          toggleIsFetching={this.props.toggleIsFetching}
          onPageChanged={this.onPageChanged}
          setUsers={this.props.setUsers}
          follow={this.props.followThunk}
          unFollow={this.props.unFollowThunk}
          setCurrentPage={this.props.setCurrentPage}
          setTotalUsersCount={this.props.setTotalUsersCount}
          toggleFollowing={this.props.toggleFollowingInProgress}
          isFollowing={this.props.isFollowing}
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
    inProgress: state.usersPage.inProgress,
    isFollowing: state.usersPage.isFollowing
  }
}

export default connect(mapStateToProps, {
  setUsers,
  follow,
  unFollow,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsersThunk,
  followThunk,
  unFollowThunk
})(UsersContainer)