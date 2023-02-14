import React from "react";
import axios, { AxiosError } from "axios";
import Input from "./UI/Input";
import User from "../assets/imgs/icon-user.svg";
import Password from "../assets/imgs/icon-password.svg";
import {
  GeneralButton,
  InvalidForm,
  StyledLogin,
  StyledLoginForm,
} from "../assets/styles/Global.styles";
import { AppContext } from "../context/ApplicationContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const appCtx = React.useContext(AppContext);
  const toNavigate = useNavigate();
  const url: string = "https://latam-challenge-2.deta.dev/api/v1";
  const [isFormSent, setIsFormSent] = React.useState<boolean>(false);
  const [enteredUsername, setEnteredUsername] = React.useState<string>("");
  const [enteredPassword, setEnteredPassword] = React.useState<string>("");

  const [usernameIconMove, setUsernameIconMove] =
    React.useState<boolean>(false);
  const [passwordIconMove, setPasswordIconMove] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    enteredUsername.length > 0
      ? setUsernameIconMove(true)
      : setUsernameIconMove(false);
  }, [enteredUsername]);

  React.useEffect(() => {
    enteredPassword.length > 0
      ? setPasswordIconMove(true)
      : setPasswordIconMove(false);
  }, [enteredPassword]);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const response = axios.post(`${url}/users/sign-in/`, {
      email: enteredUsername,
      password: enteredPassword
    }).then(data => {
      appCtx.setEnteredUser(data.data.user);
      localStorage.setItem("enteredToken", data.data.token);
      appCtx.setIsLoggedIn(true);
      toNavigate("/");
    }).catch(err => 
      alert(err.response.data)
    );
    setIsFormSent(true);
  };

  return (
    <StyledLoginForm onSubmit={onSubmitHandler}>
      <StyledLogin>
        <h3>Login</h3>
        <Input
          id="username"
          type="text"
          placeholder="user name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEnteredUsername(e.target.value);
          }}
          hasLabel={false}
          hasIcon={true}
          icon={User}
          alt={"User's Icon"}
          onFocus={() => {
            setUsernameIconMove(true);
          }}
          onBlur={() => {
            enteredUsername.length === 0 && setUsernameIconMove(false);
          }}
          isAnimated={usernameIconMove}
          errorPattern={true}
          formState={isFormSent}
        />
        <Input
          id="password"
          type="password"
          placeholder="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEnteredPassword(e.target.value);
          }}
          hasLabel={false}
          hasIcon={true}
          icon={Password}
          alt={"Password's Icon"}
          onFocus={() => {
            setPasswordIconMove(true);
          }}
          onBlur={() => {
            enteredPassword.length === 0 && setPasswordIconMove(false);
          }}
          isAnimated={passwordIconMove}
          errorPattern={true}
          formState={isFormSent}
        />
      </StyledLogin>
      <InvalidForm>
        {/* {isFormSent && !isLoginValid && (
          <p>
            Wow, invalid username or password. <br /> Please, try again!
          </p>
        )} */}
      </InvalidForm>
      <GeneralButton enteredButtonAction="Login">Log in</GeneralButton>
    </StyledLoginForm>
  );
};

export default LoginForm;