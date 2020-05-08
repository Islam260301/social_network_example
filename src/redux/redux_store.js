import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile_reduser";
import {dialogReducer} from "./reducers/dialog_reduser";
import {sidebarReducer} from "./reducers/sidebarReducer";

let rootReduser = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  sidebarPage: sidebarReducer
})

export let store = createStore(rootReduser);

