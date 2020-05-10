import {
  CHANGE_FRIENDSHIP_STATUS, CHANGE_LOAD,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  SET_USERS
} from "../actions/actionTypes";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  inProgress: false
}

export const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_FRIENDSHIP_STATUS:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return {
              ...u,
              followed: !u.followed
            }
          }

          return u;
        })
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

    default:
      return state;
  }
}