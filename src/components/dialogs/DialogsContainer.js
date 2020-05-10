import {Dialogs} from "./Dialogs";
import {onChangeHandler, sendMessage} from "../../redux/actions/actionCreators";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return{
    dialogsData: state.dialogPage.dialogsData,
    messagesData: state.dialogPage.messagesData,
    sendMessageText: state.dialogPage.sendMessageText
  }
}

export const DialogsContainer = connect(mapStateToProps, {
  sendMessage,
  onChangeHandler
})(Dialogs)