import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile_reduser";
import {dialogReducer} from "./reducers/dialog_reduser";
import {sidebarReducer} from "./reducers/sidebarReducer";
import {usersReducer} from "./reducers/users_reducer";

let rootReduсer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer
})

export let store = createStore(rootReduсer);

