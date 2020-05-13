import {combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {profileReducer} from "./reducers/profile_reduser";
import {dialogReducer} from "./reducers/dialog_reduser";
import {sidebarReducer} from "./reducers/sidebarReducer";
import {usersReducer} from "./reducers/users_reducer";
import {authReducer} from "./reducers/auth_reducer";

let rootReduсer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export let store = createStore(rootReduсer, composeEnhancers());

