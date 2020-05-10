import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Header} from './components/header/Header';
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {NavbarContainer} from "./components/sidebar/NavbarContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

export const App = () => {

  return (
    <div className="app_wrapper">
      <Header/>
      <NavbarContainer/>
      <div className="app_wrapper_content">
        <Switch>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route path='/users' render={() => <UsersContainer/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </Switch>
      </div>
      </div>
  );
}