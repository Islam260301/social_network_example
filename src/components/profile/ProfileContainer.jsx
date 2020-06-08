import React, {Component} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatusThunk, getUserProfileThunk, updateStatusThunk} from "../../redux/reducers/profile_reduser";
import {compose} from "redux";


class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfileThunk(userId)
    this.props.getStatusThunk(userId)
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatusThunk}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose(
  withRouter,
  // withAuthRedirect,
  connect(mapStateToProps, {getUserProfileThunk, getStatusThunk, updateStatusThunk})
)(ProfileContainer)