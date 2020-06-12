import React from 'react';
import {Login} from "./Login";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/reducers/auth_reducer";

class LoginContainer extends React.Component {

  loginSubmit = ({email, password, rememberMe}) => {
    this.props.loginThunk(email, password, rememberMe)
  }

  render() {
    return(
      <Login loginSubmit={this.loginSubmit}/>
    )
  }
}
let mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps,{loginThunk})(LoginContainer);