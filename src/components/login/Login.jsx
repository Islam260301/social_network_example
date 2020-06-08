import React from 'react';
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"email"} component={"input"} placeholder={"Email"} />
      </div>
      <div>
        <Field name={"password"} component={"input"} placeholder={"Password"} />
      </div>
      <div>
        <Field name={"rememberMe"} component={"input"} type={"checkbox"} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

export const Login = (props) => {

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={props.loginSubmit} />
    </>
  )
}

