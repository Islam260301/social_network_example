import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";


const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          appState={state}
          dispatch={store.dispatch.bind(store)}
          // addPost={store.addPost.bind(store)}
          // sendMessage={store.sendMessage.bind(store)}
          // inputChangeHandler={store.inputChangeHandler.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
  )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()


