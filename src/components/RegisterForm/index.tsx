import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GeneralButton, StyledInputWrapper } from "../UI/styles";
import { StyledRegisterForm } from "./styles";
import { RegisterFormProps, RegisterProps } from "../../interfaces/general-interfaces";
import Input from "../UI/Input";

const RegisterForm = (props: RegisterFormProps) => {
  const toNavigate = useNavigate();
  const url: string = "https://latam-challenge-2.deta.dev/api/v1";
  const [enteredUser, setEnteredUser] = React.useState<RegisterProps>({
    firstName: "",
    lastName: "",
    birthDate: "",
    city: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUser({
      ...enteredUser,
      [e.target.name]: e.target.value,
    });
  };

  // Checking Input Validity
  const isFirstNameValid =
    enteredUser.firstName.length >= 2 &&
    !/\d/.test(enteredUser.firstName);
  const isLastNameValid =
    enteredUser.lastName.length >= 2 &&
    !/\d/.test(enteredUser.lastName);
  const isBirthDateValid =
    enteredUser.birthDate.length === 10 &&
    Number(enteredUser.birthDate.split("/")[0]) <= 12 &&
    Number(enteredUser.birthDate.split("/")[1]) <= 31 &&
    Number(enteredUser.birthDate.split("/")[2]) >= 1900;
  const isCountryValid = enteredUser.country.length > 0;
  const isCityValid = enteredUser.city.length > 0;
  const isEmailValid =
    enteredUser.email.length > 0 &&
    enteredUser.email.includes("@");
  const isPasswordValid = enteredUser.password.length >= 8;
  const isPasswordEqual =
    enteredUser.confirmPassword.length ===
      enteredUser.password.length &&
    enteredUser.confirmPassword === enteredUser.password;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    props.setIsLoading(true);

    const onRegister = (obj: string) => {
      axios.post(`${url}/users/sign-up/`, JSON.parse(obj))
      .then(res => {
        props.setIsLoading(false);
        toNavigate("login");
      }).catch(err => {
        props.setIsLoading(false);
        if(err.response.data.errors && err.response.data.errors !== null) {
          const errorsMessages: Array<string> = err.response.data.errors;
          errorsMessages.length === 7
            ? alert("Fill all the data required, please!")
            : errorsMessages.map((messages) =>
                messages.includes("/^[a-zA-Z0-9]{3,30}$/")
                  ? alert("Password can only contain alphabetic letters or numbers!")
                  : alert(messages)
              );
        } else {
          alert(err.response.data);
        }
      });
    };

    onRegister(
      JSON.stringify({
        ...enteredUser,
      })
    )
  };

  return (
    <StyledRegisterForm onSubmit={onSubmitHandler}>
      <StyledInputWrapper>
        <Input
          id="first-name"
          name="firstName"
          type="text"
          placeholder="Your first name"
          label="first name"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Shouldn't contain numbers or be less than two letters."
          errorPattern={isFirstNameValid}
          isAnimated={false}
          formState={false}
        />
        <Input
          id="last-name"
          name="lastName"
          type="text"
          placeholder="Your last name"
          label="last name"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Shouldn't contain numbers or be less than two letters."
          errorPattern={isLastNameValid}
          isAnimated={false}
          formState={false}
        />
        <Input
          id="birth-date"
          name="birthDate"
          type="text"
          placeholder="MM/DD/YYYY"
          label="birth date"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Enter a valid birth date."
          errorPattern={isBirthDateValid}
          isAnimated={false}
          formState={false}
        />
        <Input
          id="country"
          name="country"
          type="text"
          placeholder="Your country"
          label="Country"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Can't be empty."
          errorPattern={isCountryValid}
          isAnimated={false}
          formState={false}
        />
        <Input
          id="city"
          name="city"
          type="text"
          placeholder="Your city"
          label="City"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Can't be empty."
          errorPattern={isCityValid}
          isAnimated={false}
          formState={false}
        />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="A valid e-mail here"
          label="e-mail"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Enter a valid e-mail."
          errorPattern={isEmailValid}
          isAnimated={false}
          formState={false}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Your password"
          label="password"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Must be at least 8 characters long."
          errorPattern={isPasswordValid}
          isAnimated={false}
          formState={false}
        />
        <Input
          id="confirm-password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          label="password"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Passwords must be equals!"
          errorPattern={isPasswordEqual}
          isAnimated={false}
          formState={false}
        />
      </StyledInputWrapper>
      <GeneralButton enteredButtonAction="Register">Register Now</GeneralButton>
    </StyledRegisterForm>
  );
};

export default RegisterForm;