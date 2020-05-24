import {
  CHANGE_LOAD,
  FOLLOW_USER,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  SET_USERS,
  TOGGLEFOLLOWING,
  UNFOLLOW_USER
} from "../actions/actionTypes";
import {followReq, getUsersReq, unFollowReq} from "../../api/api";
import {
  follow,
  setTotalUsersCount,
  setUsers,
  toggleFollowingInProgress,
  toggleIsFetching,
  unFollow
} from "../actions/actionCreators";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  inProgress: false,
  isFollowing: false
}

export const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state
      }
    case UNFOLLOW_USER:
      return {
        ...state
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      };
    case CHANGE_LOAD:
      return {
        ...state,
        inProgress: action.loadState
      };
    case TOGGLEFOLLOWING:
      return {
        ...state,
        isFollowing: action.isInProgress
      }

    default:
      return state;
  }
}

export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    let users = getUsersReq(currentPage, pageSize);
    debugger
    users.then(data => {
      debugger
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    })
  }
}

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true))
    followReq(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(userId))
      }
      dispatch(toggleFollowingInProgress(false))
    })
  }
}

export const unFollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true))
    unFollowReq(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unFollow(userId))
      }
      dispatch(toggleFollowingInProgress(false))
    })
  }
}