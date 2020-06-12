import React, {Component} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataThunk, logoutThunk} from "../../redux/reducers/auth_reducer";

class HeaderContainer extends Component {

  componentDidMount() {
    this.props.getAuthUserDataThunk()
  }

  render() {
    return (
      <Header
        isAuth={this.props.isAuth}
        id={this.props.id}
        email={this.props.email}
        login={this.props.login}
        logout={this.props.logoutThunk}
        profile={this.props.profile}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, {
  getAuthUserDataThunk,
  logoutThunk
})(HeaderContainer);