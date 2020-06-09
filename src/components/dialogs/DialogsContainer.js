import {Dialogs} from "./Dialogs";
import {sendMessage} from "../../redux/actions/actionCreators";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {reset} from "redux-form";


class DialogsContainer extends React.Component {

  sendMessage = (values) => {
    this.props.sendMessage(values.sendMessageText) //made with redux-form
    this.props.reset("dialogs")
  }

  render() {
    return (
      <Dialogs
        sendMessage={this.sendMessage}
        dialogsData={this.props.dialogsData}
        messagesData={this.props.messagesData}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogPage.dialogsData,
    messagesData: state.dialogPage.messagesData,
  }
}

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    sendMessage,
    reset
  })
)(DialogsContainer)