import React, {Component} from "react";
import {Profile} from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/actions/actionCreators";


class ProfileContainer extends Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(res => {
        this.props.setUserProfile(res.data)
      })
  }

  render() {
    return (
      <Profile {...this.props}/>
    );
  }
}

let mapStateToProps = (state) => {
  return {

  }
}


export default connect(mapStateToProps,{
  setUserProfile
})(ProfileContainer)