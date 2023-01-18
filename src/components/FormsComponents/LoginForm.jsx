import React from 'react'
import InputField from './InputField'
import IconUser from '../../assets/icon-user.svg'
import IconPassword from '../../assets/icon-password.svg'

const LoginForm = () => {
  return (
    <form className="login-form">
      <h3>Login</h3>
      <div className="login-input">
        <InputField
          id={"username"}
          type={"text"}
          placeholder={"user name"}
          iconImg={IconUser}
          alt={"User icon"}
        />
        <InputField
          id={"password"}
          type={"password"}
          placeholder={"password"}
          iconImg={IconPassword}
          alt={"Password icon"}
        />
      </div>
      <button className="form-button">Log in</button>
    </form>
  );
}

export default LoginForm
