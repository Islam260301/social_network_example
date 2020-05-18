import React, {Component} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/actions/actionCreators";
import * as axios from "axios";

class HeaderContainer extends Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    }).then(res => {
      debugger
      if (res.data.resultCode === 0) {
        this.props.setAuthUserData(res.data.data)
      }
    })
  }

  render() {
    return (
      <Header
        {...this.props}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    state: state.auth
  }
}

export default connect(mapStateToProps, {
  setAuthUserData
})(HeaderContainer);