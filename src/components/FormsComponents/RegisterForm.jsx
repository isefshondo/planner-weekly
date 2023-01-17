import React from 'react'
import FieldComponent from './FieldComponent';

const RegisterForm = () => {
  const firstName = React.useRef(null);
  const lastName = React.useRef(null);
  const birthDate = React.useRef(null);
  const country = React.useRef(null);
  const city = React.useRef(null);
  const email = React.useRef(null);
  const password = React.useRef(null);
  const confirmPassword = React.useRef(null);

  return (
    <React.Fragment>
      <form>
        <FieldComponent
          id={"first-name"}
          reference={firstName}
          label={"first name"}
          type={"text"}
          placeholder={"Your first name"}
        />
        <FieldComponent
          id={"last-name"}
          reference={lastName}
          label={"last name"}
          type={"text"}
          placeholder={"Your last name"}
        />
        <FieldComponent
          id={"birth-date"}
          reference={birthDate}
          label={"birth date"}
          type={"text"}
          placeholder={"MM/DD/YYYY"}
        />
        <FieldComponent
          id={"country"}
          reference={country}
          label={"Country"}
          type={"text"}
          placeholder={"Your country"}
        />
        <FieldComponent
          id={"city"}
          reference={city}
          label={"City"}
          type={"text"}
          placeholder={"Your city"}
        />
        <FieldComponent
          id={"email"}
          reference={email}
          label={"e-mail"}
          type={"email"}
          placeholder={"A valid e-mail here"}
        />
        <FieldComponent
          id={"password"}
          reference={password}
          label={"password"}
          type={"password"}
          placeholder={"Your password"}
        />
        <FieldComponent
          id={"confirm-password"}
          reference={confirmPassword}
          label={"password"}
          type={"password"}
          placeholder={"Confirm your password"}
        />
      </form>
    </React.Fragment>
  );
}

export default RegisterForm
