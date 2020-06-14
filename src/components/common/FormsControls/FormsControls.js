import React from "react";
import s from "./FormControl.module.css"


const FormControl = ({meta, ...props}) => {

  let hasError = meta.touched && meta.error

  return(
    <div className={s.formControl}>
      <div className={hasError ? "error" : " "}>
        {props.children}
      </div>
      <div>
        {hasError ? <span>{meta.error}</span> : null}
      </div>
    </div>
  )
}


export const Textarea = (props) => {
  return <FormControl {...props} ><textarea{...props.input} {...props} /></FormControl>
};

export const Input = (props) => {
  return <FormControl {...props} ><input{...props.input} {...props} /></FormControl>
};
