import React from 'react';
import {Field, reduxForm} from "redux-form";
import {email, maxLengthCreator, minLengthCreator, requiredField} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import s from '../common/FormsControls/FormControl.module.css'

let maxLength18 = maxLengthCreator(18)

let minLength6 = minLengthCreator(6)

const LoginForm = (props) => {

  return (<form className={s.loginForm} onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"email"}
          type={"email"}
          component={Input}
          placeholder={"Email"}
          validate={[requiredField, email]}
        />

      </div>
      <div>
        <Field
          name={"password"}
          type={"password"}
          component={Input}
          placeholder={"Password"}
          validate={[requiredField, minLength6, maxLength18]}
        />
      </div>
      <div>
        <Field
          name={"rememberMe"}
          component={"input"}
          type={"checkbox"} /> remember me
      </div>
      {props.error && <div className={s.loginCommonError}>
        {props.error}
      </div>}
      <div>
        <img src={props.captchaImage} alt={"loading"}/>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login"
})(LoginForm)

export const Login = (props) => {
  return (
    <>
      <h1 className={s.loginHeader}>Login</h1>
      <LoginReduxForm
        onSubmit={props.loginSubmit}
        captchaImage={props.captchaImage}
      />
    </>
  )
}

