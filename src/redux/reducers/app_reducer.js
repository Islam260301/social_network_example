import {
  INITIALIZED,
  LOGIN, LOGOUT,
  SET_USER_DATA
} from "../actions/actionTypes";
import {authMeReq, loginReq, logoutReq} from "../../api/api";
import {initializeAppAC, loginAC, logoutAC, setAuthUserData, setUserProfile} from "../actions/actionCreators";
import {getUserProfileThunk} from "./profile_reduser";
import {stopSubmit} from "redux-form";
import {getAuthUserDataThunk} from "./auth_reducer";

let initialState = {
  initialized: false
}

export const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case INITIALIZED:
      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
}

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserDataThunk())
  Promise.all([promise]).then(() => {
    dispatch(initializeAppAC())
  })
}
