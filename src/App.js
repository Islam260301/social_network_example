import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header/>
        <Navbar/>
        <div className="app_wrapper_content">
          <Switch>
            <Route path='/dialogs' render={() => <Dialogs data={props.appState.dialogPage}/>}/>
            <Route path='/profile' render={() => <Profile data={props.appState.profilePage}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
