import React, {Component} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataThunk, logoutThunk} from "../../redux/reducers/auth_reducer";

class HeaderContainer extends Component {

  render() {
    return (
      <Header
        isAuth={this.props.isAuth}
        id={this.props.id}
        email={this.props.email}
        logout={this.props.logoutThunk}
        userName={this.props.login}
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
  }
}

export default connect(mapStateToProps, {
  getAuthUserDataThunk,
  logoutThunk
})(HeaderContainer);