import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {profileReducer} from "./reducers/profile_reduser";
import {dialogReducer} from "./reducers/dialog_reduser";
import {sidebarReducer} from "./reducers/sidebarReducer";
import {usersReducer} from "./reducers/users_reducer";
import {authReducer} from "./reducers/auth_reducer";
import thunk from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

let rootReduсer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
})

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

export let store = createStore(rootReduсer, composeEnhancers);

