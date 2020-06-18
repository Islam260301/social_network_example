import React, {useState} from 'react';

export const ProfileEditStatusFN = (props) => {

  const [editStatusMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const activateEditMode = () => {
    setEditMode(true)
  }

  const statusChangeHandler = (e) => {
    setStatus(e.target.value)
  }

    return (
      <>
        {editStatusMode ? <div>
          <input
            onChange={statusChangeHandler}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status} />
        </div> : <div>
          <span onDoubleClick={activateEditMode}>{props.status || "---yo----"}</span>
        </div>}
      </>
    )
}