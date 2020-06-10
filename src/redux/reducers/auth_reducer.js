import {
  LOGIN,
  SET_USER_DATA
} from "../actions/actionTypes";
import {authMeReq, loginReq, logoutReq} from "../../api/api";
import {loginAC, logoutAC, setAuthUserData} from "../actions/actionCreators";

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

    default:
      return state;
  }
}

export const getAuthUserDataThunk = () => (dispatch) => {
  authMeReq().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data))  // id, login, email
    }
  })
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {
  loginReq(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(loginAC(data.data.userId))
    }
  })
}

export const logoutThunk = () => (dispatch) => {
  logoutReq().then(data => {
    if (data.resultCode === 0) {
      dispatch(logoutAC())
    }
  })
}