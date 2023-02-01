import React from "react";
import { GeneralButton, InvalidForm, StyledInputWrapper, StyledRegisterForm } from "../../assets/styles/Global.styles";
import { AppContext } from "../../context/ApplicationContext";
import { RegisterProps } from "../../interfaces/Interfaces";
import Input from "../UI/Input";

const RegisterForm = () => {
  const appCtx = React.useContext(AppContext);
  const [isFormValid, setIsFormValid] = React.useState<boolean>(true);
  const [enteredUser, setEnteredUser] = React.useState<RegisterProps>({
    enteredFirstName: "",
    enteredLastName: "",
    enteredBirthDate: "",
    enteredCountry: "",
    enteredCity: "",
    enteredEmail: "",
    enteredPassword: "",
    enteredConfirmPassword: "",
  });

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUser({
      ...enteredUser, [e.target.name]: e.target.value
    });
  };

  const isFirstNameValid =
    enteredUser.enteredFirstName.length >= 2 && !/\d/.test(enteredUser.enteredFirstName);
  const isLastNameValid =
    enteredUser.enteredLastName.length >= 2 && !/\d/.test(enteredUser.enteredLastName);
  const isBirthDateValid =
    enteredUser.enteredBirthDate.length === 10 &&
    Number(enteredUser.enteredBirthDate.split("/")[0]) <= 12 &&
    Number(enteredUser.enteredBirthDate.split("/")[1]) <= 31 &&
    Number(enteredUser.enteredBirthDate.split("/")[2]) >= 1900;
  const isCountryValid = enteredUser.enteredCountry.length > 0;
  const isCityValid = enteredUser.enteredCity.length > 0;
  const isEmailValid = enteredUser.enteredEmail.length > 0 && enteredUser.enteredEmail.includes("@");
  const isPasswordValid = enteredUser.enteredPassword.length >= 8;
  const isPasswordEqual =
    enteredUser.enteredConfirmPassword.length === enteredUser.enteredPassword.length &&
    enteredUser.enteredConfirmPassword === enteredUser.enteredPassword;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(
      isFirstNameValid === true &&
      isLastNameValid === true &&
      isBirthDateValid === true &&
      isCountryValid === true &&
      isCityValid === true &&
      isEmailValid === true &&
      isPasswordValid === true &&
      isPasswordEqual === true
    ){
      appCtx.onRegister(
        JSON.stringify({
          ...enteredUser,
          fullName: `${enteredUser.enteredFirstName} ${enteredUser.enteredLastName}`,
        })
      );
    } else{
      setIsFormValid(false);
    }
  };

  return (
    <StyledRegisterForm onSubmit={onSubmitHandler}>
      <StyledInputWrapper>
        <Input
          id="first-name"
          name="enteredFirstName"
          type="text"
          placeholder="Your first name"
          label="first name"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Shouldn't contain numbers or be less than two letters."
          errorPattern={isFirstNameValid}
          isAnimated={false}
        />
        <Input
          id="last-name"
          name="enteredLastName"
          type="text"
          placeholder="Your last name"
          label="last name"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Shouldn't contain numbers or be less than two letters."
          errorPattern={isLastNameValid}
          isAnimated={false}
        />
        <Input
          id="birth-date"
          name="enteredBirthDate"
          type="text"
          placeholder="MM/DD/YYYY"
          label="birth date"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Enter a valid birth date."
          errorPattern={isBirthDateValid}
          isAnimated={false}
        />
        <Input
          id="country"
          name="enteredCountry"
          type="text"
          placeholder="Your country"
          label="Country"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Can't be empty."
          errorPattern={isCountryValid}
          isAnimated={false}
        />
        <Input
          id="city"
          name="enteredCity"
          type="text"
          placeholder="Your city"
          label="City"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Can't be empty."
          errorPattern={isCityValid}
          isAnimated={false}
        />
        <Input
          id="email"
          name="enteredEmail"
          type="email"
          placeholder="A valid e-mail here"
          label="e-mail"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Enter a valid e-mail."
          errorPattern={isEmailValid}
          isAnimated={false}
        />
        <Input
          id="password"
          name="enteredPassword"
          type="password"
          placeholder="Your password"
          label="password"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Must be at least 8 characters long."
          errorPattern={isPasswordValid}
          isAnimated={false}
        />
        <Input
          id="confirm-password"
          name="enteredConfirmPassword"
          type="password"
          placeholder="Confirm your password"
          label="password"
          onChange={onInputChangeHandler}
          hasLabel={true}
          hasIcon={false}
          errorMessage="Passwords must be equals!"
          errorPattern={isPasswordEqual}
          isAnimated={false}
        />
      </StyledInputWrapper>
      <InvalidForm>
        {!isFormValid && <p>Check if it's all filled in correctly and if the passwords match.</p>}
      </InvalidForm>
      <GeneralButton enteredButtonAction="Register">
        Register Now
      </GeneralButton>
    </StyledRegisterForm>
  );
};

export default RegisterForm;