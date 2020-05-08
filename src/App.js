import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";

const App = (props) => {
  const dialogs = () => <Dialogs
    data={props.appState.dialogPage}
    dispatch={props.dispatch}
  />
  const profile = () => <Profile
    data={props.appState.profilePage}
    dispatch={props.dispatch}
  />
  const news = () => <News/>
  const music = () => <Music/>
  const settings = () => <Settings/>

  return (
    <div className="app_wrapper">
      <Header/>
      <Navbar data={props.appState.sidebarPage}/>
      <div className="app_wrapper_content">
        <Switch>
          <Route path='/dialogs' render={dialogs}/>
          <Route path='/profile' render={profile}/>
          <Route path='/news' render={news}/>
          <Route path='/music' render={music}/>
          <Route path='/settings' render={settings}/>
        </Switch>
      </div>
      </div>
  );
}

export default App;
