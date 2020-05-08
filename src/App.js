import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Header} from './components/header/Header';
import {Profile} from './components/profile/Profile';
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {NavbarContainer} from "./components/sidebar/NavbarContainer";

const App = () => {

  return (
    <div className="app_wrapper">
      <Header/>
      <NavbarContainer/>
      <div className="app_wrapper_content">
        <Switch>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/profile' render={() => <Profile/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </Switch>
      </div>
      </div>
  );
}

export default App;
