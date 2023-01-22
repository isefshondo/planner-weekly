import React from 'react'
import { AuthContext } from '../../context/AuthContext'
import InputFormLogin from './InputFormLogin'
import IconUser from '../../assets/icon-user.svg'
import IconPassword from '../../assets/icon-password.svg'
import { GeneralButton } from '../../Global.styles'
import { ErrorMessage, FormLoginWrapper, LoginInput } from './Login.styles'

const FormLogin = () => {
  const authCtx = React.useContext(AuthContext);

  const [isLoginValid, setIsLoginValid] = React.useState(true);

  const [isUsernameFilled, setIsUsernameFilled] = React.useState("");
  const [isPasswordFilled, setIsPasswordFilled] = React.useState("");

  const [usernameIconMove, setUsernameIconMove] = React.useState(false);
  const [passwordIconMove, setPasswordIconMove] = React.useState(false);

  const enteredUsername = React.useRef(null);
  const enteredPassword = React.useRef(null);

  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
    
    authCtx.onLogin(enteredUsername.current.value, enteredPassword.current.value, setIsLoginValid);
  };

  const onUsernameChange = (e) => {
    setIsUsernameFilled(e.target.value);
    isUsernameFilled.length > 1 ? setUsernameIconMove(true) : setUsernameIconMove(false);
  };

  const onPasswordChange = (e) => {
    setIsPasswordFilled(e.target.value);
    isPasswordFilled.length > 1 ? setPasswordIconMove(true) : setPasswordIconMove(false);
  };

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
          inputState={usernameIconMove}
          onChange={onUsernameChange}
          isValid={isLoginValid}
        />
        <InputFormLogin 
          id={"password"}
          icon={IconPassword}
          alt={"Password's Icon"}
          reference={enteredPassword}
          type={"password"}
          placeholder={"password"}
          inputState={passwordIconMove}
          onChange={onPasswordChange}
          isValid={isLoginValid}
        />
      </LoginInput>
      <ErrorMessage>
        {
          !isLoginValid && "Wow, invalid username or password. Please try again!"
        }
      </ErrorMessage>
      <div>
        <GeneralButton>
          Log in
        </GeneralButton>
      </div>
    </FormLoginWrapper>
  )
}

export default FormLogin
