import React from "react";
import Input from "../UI/Input";

const RegisterForm = () => {
  const [enteredFirstName, setEnteredFirstName] = React.useState<null | string>(null);
  const [enteredLastName, setEnteredLastName] = React.useState<null | string>(null);
  const [enteredBirthDate, setEnteredBirthDate] = React.useState<null | string>(null);
  const [enteredCountry, setEnteredCountry] = React.useState<null | string>(null);
  const [enteredCity, setEnteredCity] = React.useState<null | string>(null);
  const [enteredEmail, setEnteredEmail] = React.useState<null | string>(null);
  const [enteredPassword, setEnteredPassword] = React.useState<null | string>(null);
  const [enteredConfirmPassword, setEnteredConfirmPassword] = React.useState<null | string>(null);

  return (
    <form>
      <Input
        id="first-name"
        type="text"
        placeholder="Your first name"
        label="first name"
        onChange={
          (e) => {
            setEnteredFirstName(e.target.value);
          }
        }
        hasLabel={true}
        hasIcon={false}
      />
      <Input
        id="last-name"
        type="text"
        placeholder="Your last name"
        label="last-name"
        onChange={
          (e) => {
            setEnteredLastName(e.target.value);
          }
        }
        hasLabel={true}
        hasIcon={false}
      />
      <Input
        id="birth-date"
        type="text"
        placeholder="MM/DD/YYYY"
        label="birth date"
        onChange={
          (e) => {
            setEnteredBirthDate(e.target.value);
          }
        }
        hasLabel={true}
        hasIcon={false}
      />
      <Input
        id="country"
        type="text"
        placeholder="Your country"
        label="Country"
        onChange={
          (e) => {
            setEnteredCountry(e.target.value);
          }
        }
        hasLabel={true}
        hasIcon={false}
      />
      <Input
        id="city"
        type="text"
        placeholder="Your city"
        label="City"
        onChange={
          (e) => {
            setEnteredCity(e.target.value);
          }
        }
        hasLabel={true}
        hasIcon={false}
      />
      <Input
        id="email"
        type="email"
        placeholder="A valid e-mail here"
        label="e-mail"
        onChange={
          (e) => {
            setEnteredEmail(e.target.value);
          }
        }
        hasLabel={true}
        hasIcon={false}
      />
      <Input
        id="password"
        type="password"
        placeholder="Your password"
        label="password"
        onChange={
          (e) => {
            setEnteredPassword(e.target.value);
          }
        }
        hasLabel={true}
        hasIcon={false}
      />
      <Input
        id="confirm-password"
        type="password"
        placeholder="Confirm your password"
        label="password"
        onChange={
          (e) => {
            setEnteredConfirmPassword(e.target.value);
          }
        }
        hasLabel={true}
        hasIcon={false}
      />
    </form>
  );
};

export default RegisterForm;