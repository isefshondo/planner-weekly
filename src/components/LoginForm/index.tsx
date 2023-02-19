import React from "react";
import axios from "axios";
import Input from "../UI/Input";
import User from "../../assets/imgs/icon-user.svg";
import Password from "../../assets/imgs/icon-password.svg";
import { GeneralButton, InvalidForm } from "../UI/styles";
import { StyledLogin, StyledLoginForm } from "./styles";
import { AppContext } from "../../context/ApplicationContext";
import { useNavigate } from "react-router-dom";
import { LoginFormProps } from "../../interfaces/general-interfaces";

const LoginForm = (props: LoginFormProps) => {
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

    props.setIsLoading(true);

    const response = axios.post(`${url}/users/sign-in/`, {
      email: enteredUsername,
      password: enteredPassword
    }).then(data => {
      props.setIsLoading(false);
      if(data.data.token) {
        appCtx.setEnteredUser(data.data.user);
        localStorage.setItem("enteredToken", data.data.token);
        localStorage.setItem("locationInfo", JSON.stringify({
          city: data.data.user.city,
          country: data.data.user.country,
        }));
        appCtx.setIsLoggedIn(true);
        toNavigate("/");
      }
      return data.data.token;
    }).catch(err => {
      props.setIsLoading(false);
      if(err.response.data.errors && err.response.data.errors !== null) {
        const errorsMessages: Array<string> = err.response.data.errors;
        errorsMessages.map(messages => alert(messages));
      } else {
        alert(err.response.data);
      }
    });

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
      <InvalidForm />
      <GeneralButton enteredButtonAction="Login">Log in</GeneralButton>
    </StyledLoginForm>
  );
};

export default LoginForm;