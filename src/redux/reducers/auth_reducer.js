import {
  LOGIN, LOGOUT,
  SET_USER_DATA
} from "../actions/actionTypes";
import {authMeReq, loginReq, logoutReq} from "../../api/api";
import {loginAC, logoutAC, setAuthUserData, setUserProfile} from "../actions/actionCreators";
import {getUserProfileThunk} from "./profile_reduser";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    case LOGIN:
      return {
        ...state,
        isAuth: true
      }
    case LOGOUT:
      return {
        ...state,
        isAuth: false
      }

    default:
      return state;
  }
}

export const getAuthUserDataThunk = () => (dispatch) => {
  authMeReq().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data))  // id, login, email
      dispatch(loginAC())  // id, login, email
    }
  })
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {
  loginReq(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(getUserProfileThunk(data.data.userId))
      dispatch(loginAC())
    }
  })
}

export const logoutThunk = () => (dispatch) => {
  logoutReq().then(data => {
    if (data.resultCode === 0) {
      dispatch(logoutAC())
      dispatch(setUserProfile({fullName: null,userId: null}))
    }
  })
}