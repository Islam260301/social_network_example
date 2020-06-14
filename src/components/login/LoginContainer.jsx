import React from 'react';
import {Login} from "./Login";
import {connect} from "react-redux";
import {getAuthUserDataThunk, loginThunk} from "../../redux/reducers/auth_reducer";
import {compose} from "redux";
import {Redirect} from "react-router-dom";
import {captchaReq} from "../../api/api";


class LoginContainer extends React.Component {

  captchaImage = null

  componentDidMount() {
    captchaReq().then(url => {
       this.captchaImage = url
      }
    )
  }

  loginSubmit = ({email, password, rememberMe}) => {
    this.props.getAuthUserDataThunk()
    this.props.loginThunk(email, password, rememberMe)
  }

  render() {

    if(this.props.isAuth) {
      return <Redirect to='/profile'/>
    }

    return(
      <Login
        loginSubmit={this.loginSubmit}
        captchaImage={this.captchaImage}
      />

    )
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps,{loginThunk, getAuthUserDataThunk})
)(LoginContainer)
