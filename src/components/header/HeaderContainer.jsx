import React, {Component} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/actions/actionCreators";
import {authMeReq} from "../../api/api";

class HeaderContainer extends Component {

  componentDidMount() {
    authMeReq().then(data => {
      if (data.resultCode === 0) {
        this.props.setAuthUserData(data.data)
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