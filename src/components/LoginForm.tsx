import React from "react";
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

const LoginForm = () => {
  const appCtx = React.useContext(AppContext);
  const [isFormSent, setIsFormSent] = React.useState<boolean>(false);
  const [enteredUsername, setEnteredUsername] = React.useState<string>("");
  const [enteredPassword, setEnteredPassword] = React.useState<string>("");

  const [usernameIconMove, setUsernameIconMove] =
    React.useState<boolean>(false);
  const [passwordIconMove, setPasswordIconMove] =
    React.useState<boolean>(false);

  // const isLoginValid =
  //   enteredUsername ===
  //     (appCtx.enteredUser.email || appCtx.enteredUser.fullName) &&
  //   enteredPassword === appCtx.enteredUser.password;

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

    appCtx.onLogin(enteredUsername, enteredPassword);

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