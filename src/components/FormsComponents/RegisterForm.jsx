import React from 'react'
import { useNavigate } from 'react-router-dom';
import FieldComponent from './FieldComponent';
import { ButtonForm } from '../../styled-components/styled-components';
import { AuthContext } from '../../context/AuthContext';

const RegisterForm = () => {
  const [isFormValid, setIsFormValid] = React.useState(true);
  const authCtx = React.useContext(AuthContext);

  const navigate = useNavigate();
  
  const firstName = React.useRef(null);
  const lastName = React.useRef(null);
  const birthDate = React.useRef(null);
  const country = React.useRef(null);
  const city = React.useRef(null);
  const email = React.useRef(null);
  const password = React.useRef(null);
  const confirmPassword = React.useRef(null);
  
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    
    const isNameValid = firstName.current.value.length >= 2 && !/\d/.test(firstName.current.value);
    const isLastNameValid = lastName.current.value.length >= 2 && !/\d/.test(lastName.current.value);
    const isCountryValid = country.current.value.length > 0;
    const isCityValid = city.current.value.length > 0;
    const isEmailValid = email.current.value.includes('@');
    const isPasswordEqual = password.current.value === confirmPassword.current.value && password.current.value.length === confirmPassword.current.value.length;

    if (
      isNameValid === true &&
      isLastNameValid === true &&
      isCountryValid === true &&
      isCityValid === true &&
      isEmailValid === true &&
      isPasswordEqual === true
    ) {
      authCtx.onRegister(
        JSON.stringify(
          {
            fullName: firstName.current.value + ' ' + lastName.current.value,
            birthDate: birthDate.current.value,
            country: country.current.value,
            city: city.current.value,
            email: email.current.value,
            password: password.current.value,
          }
        )
      );
      navigate('login');
    } else{
      setIsFormValid(false);
    }

  };

  return (
    <React.Fragment>
      <form onSubmit={onFormSubmitHandler} className="register-form">
        <div className="register-input">
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
        </div>
        {!isFormValid && <p>There's something wrong</p>}
        <ButtonForm>Register Now</ButtonForm>
      </form>
    </React.Fragment>
  );
}

export default RegisterForm
