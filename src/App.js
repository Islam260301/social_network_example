import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import {NavbarContainer} from "./components/sidebar/NavbarContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/app_reducer";
import {Preloader} from "./components/common/preloader/Preloader";

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if(this.props.initialized) {
      return (
        <div className="app_wrapper">
          <HeaderContainer />
          <NavbarContainer />
          <div className="app_wrapper_content">
            <Switch>
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/login" render={() => <LoginContainer />} />
            </Switch>
          </div>
        </div>
      )
    }else {
      return (
        <Preloader/>
      )
    }
  }
}

let mapStateToProps = (state) => {
  return{
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App)