import React from 'react'
import { UserContext } from '../../context/UserContext'
import { AuthContext } from '../../context/AuthContext'
import InputFormLogin from './InputFormLogin'
import IconUser from '../../assets/icon-user.svg'
import IconPassword from '../../assets/icon-password.svg'

const FormLogin = () => {
  const { user } = React.useContext(UserContext);
  const authCtx = React.useContext(AuthContext);
  const { fullName, email, password } = user;
  const [isFormValid, setIsFormValid] = React.useState(null);
  const enteredUsername = React.useRef(null);
  const enteredPassword = React.useRef(null);

  const onLoginSubmitHandler = (e) => {
    e.preventDefault();

    const isUsernameValid = 
      enteredUsername.current.value === fullName || enteredUsername.current.value === email;
    const isPasswordValid = 
      enteredPassword.current.value === password;

    if(isUsernameValid && isPasswordValid){
      authCtx.onLogin(enteredUsername.current.value, enteredPassword.current.value);
    }
  };

  return (
    <form onSubmit={onLoginSubmitHandler} className='login-form'>
      <h3>Login</h3>
      <div className='login-input'>
        <InputFormLogin 
          id={"username"}
          icon={IconUser}
          alt={"User's Icon"}
          reference={enteredUsername}
          type={"text"}
        />
        <InputFormLogin 
          id={"password"}
          icon={IconPassword}
          alt={"Password's Icon"}
          reference={enteredPassword}
          type={"password"}
        />
      </div>
      <button className="form-button">Log in</button>
    </form>
  )
}

export default FormLogin
