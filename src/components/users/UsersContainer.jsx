import React from 'react';
import {changeFriendshipAC, setUsersAC} from "../../redux/actions/actionCreators";
import {connect} from "react-redux";
import {Users} from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch(setUsersAC(users)),
    changeFriendship: (userId) => dispatch(changeFriendshipAC(userId))
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)