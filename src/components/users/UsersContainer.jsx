import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {
  follow,
  setCurrentPage,
  setUsers,
  toggleFollowingInProgress,
  unFollow
} from "../../redux/actions/actionCreators";
import {followThunk, getUsersThunk, unFollowThunk} from "../../redux/reducers/users_reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {
  getCurrentPage,
  getTotalUsersCount, getUsers,
  getUsersPageSize, getUsersSelector,
  userIsFollowing,
  userPageIsInProgress
} from "../../redux/selectors/userSelectors";
import {store} from "../../redux/redux_store";

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
          onPageChanged={this.onPageChanged}
          setUsers={this.props.setUsers}
          follow={this.props.followThunk}
          unFollow={this.props.unFollowThunk}
          isFollowing={this.props.isFollowing}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => {

  return {
    users: getUsers(state),
    pageSize: getUsersPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    inProgress: userPageIsInProgress(state),
    isFollowing: userIsFollowing(state)
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
  setUsers,
  follow,
  unFollow,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsersThunk,
  followThunk,
  unFollowThunk
}))(UsersContainer)