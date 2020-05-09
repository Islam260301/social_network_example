import {Dialogs} from "./Dialogs";
import {
  inputChangeHandlerAC,
  sendMessageAC,
} from "../../redux/actions/actionCreators";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return{
    dialogsData: state.dialogPage.dialogsData,
    messagesData: state.dialogPage.messagesData,
    sendMessageText: state.dialogPage.sendMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageAC()),
    onChangeHandler: (event) => dispatch(inputChangeHandlerAC(event))
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)