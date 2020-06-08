import React from 'react';

export class ProfileEditStatus extends React.Component {
  state = {
    editStatusMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({status: this.props.status})
    }
  }

  activateEditMode = () => {
    this.setState({editStatusMode: true})
  }

  deactivateEditMode = () => {
    this.setState({editStatusMode: false})
    this.props.updateStatus(this.state.status)
  }

  statusChangeHandler = (e) => {
    this.setState({status: e.target.value})
  }

  render() {
    return (
      <>
        {this.state.editStatusMode ? <div>
          <input
            onChange={this.statusChangeHandler}
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            value={this.state.status} />
        </div> : <div>
          <span onDoubleClick={this.activateEditMode} >{this.props.status || "-------"}</span>
        </div>}
      </>
    )
  }
}