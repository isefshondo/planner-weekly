import React from 'react'
import FieldComponent from './FieldComponent';

const InputsInfo = [
  {id: 'first-name', label: 'first name', type: 'text', placeholder: 'Your first name'},
  {id: 'last-name', label: 'last name', type: 'text', placeholder: 'Your last name'},
  {id: 'birth-date', label: 'birth date', type: 'text', placeholder: 'MM/DD/YYYY'},
  {id: 'country', label: 'Country', type: 'text', placeholder: 'Your country'},
  {id: 'city', label: 'City', type: 'text', placeholder: 'Your city'},
  {id: 'email', label: 'e-mail', type: 'email', placeholder: 'A valid e-mail here'},
  {id: 'password', label: 'password', type: 'password', placeholder: 'Your password'},
  {id: 'confirm-password', label: 'password', type: 'password', placeholder: 'Confirm your password'},
];

const RegisterForm = () => {
  const [createUserData, setCreateUserData] = React.useState([]);
  return (
    <React.Fragment>
      <form>
        <FieldComponent 
          inputs={InputsInfo}
          user={setCreateUserData}
        />
      </form>
    </React.Fragment>
  )
}

export default RegisterForm
