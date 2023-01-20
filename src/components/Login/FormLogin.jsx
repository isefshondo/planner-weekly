import React from 'react'
import { AuthContext } from '../../context/AuthContext'
import InputFormLogin from './InputFormLogin'
import IconUser from '../../assets/icon-user.svg'
import IconPassword from '../../assets/icon-password.svg'
import { GeneralButton } from '../../Global.styles'
import { ErrorMessage, FormLoginWrapper, LoginInput } from './Login.styles'

const FormLogin = () => {
  const authCtx = React.useContext(AuthContext);

  const enteredUsername = React.useRef(null);
  const enteredPassword = React.useRef(null);

  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
    
    authCtx.onLogin(enteredUsername.current.value, enteredPassword.current.value);
  };

  const onUsernameChange = () => {};

  const onPasswordChange = () => {};

  return (
    <FormLoginWrapper onSubmit={onLoginSubmitHandler}>
      <LoginInput>
        <h3>Login</h3>
        <InputFormLogin 
          id={"username"}
          icon={IconUser}
          alt={"User's Icon"}
          reference={enteredUsername}
          type={"text"}
          placeholder={"user name"}
        />
        <InputFormLogin 
          id={"password"}
          icon={IconPassword}
          alt={"Password's Icon"}
          reference={enteredPassword}
          type={"password"}
          placeholder={"password"}
        />
      </LoginInput>
      <ErrorMessage></ErrorMessage>
      <div>
        <GeneralButton>
          Log in
        </GeneralButton>
      </div>
    </FormLoginWrapper>
  )
}

export default FormLogin
