import React from "react";
import s from "./FormControl.module.css"


const FormControl = (props) => {
  return(
    <div className={s.formControl}>
      <div>
        <textarea className={hasError && s.error} {...input} {...props} />
      </div>
      <div>
        {hasError ? <span>{meta.error}</span> : null}
      </div>
    </div>
  )
}

export const Textarea = ({input, meta, ...props}) => {

  let hasError = meta.touched && meta.error;

  return(
    <div className={s.formControl}>
      <div>
        <textarea className={hasError && s.error} {...input} {...props} />
      </div>
      <div>
        {hasError ? <span>{meta.error}</span> : null}
      </div>
    </div>
  );
};