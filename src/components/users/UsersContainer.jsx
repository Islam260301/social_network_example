import {changeFriendshipAC, setCurrentPageAC, setTotalUsersCount, setUsersAC} from "../../redux/actions/actionCreators";
import {connect} from "react-redux";
// import {Users} from "./Users";
import {UsersClass} from './UsersClass'
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch(setUsersAC(users)),
    changeFriendship: (id) => dispatch(changeFriendshipAC(id)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
    setTotalUsersCount: (count) => dispatch(setTotalUsersCount(count)),

  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)