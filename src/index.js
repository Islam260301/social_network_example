import * as serviceWorker from './serviceWorker';
import {state, addPost, inputChangeHandler} from "./redux/state";
import {rerenderEntireTree} from "./render";

rerenderEntireTree(state, addPost, inputChangeHandler)

