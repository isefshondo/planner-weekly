import React from 'react'
import { InputForm } from '../../Global.styles';

const FieldComponent = ({ type, id, label, placeholder, reference }) => {

  const dateMaskHandler = (e) => {
    let v = e.target.value.replace(/\D/g, "");

    v = v.replace(/(\d{2})(\d)/, "$1/$2");

    v = v.replace(/(\d{2})(\d)/, "$1/$2");

    e.target.value = v;
  };

  return (
    <React.Fragment>
      {
        id === "birth-date" && (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <InputForm 
              type={type} 
              ref={reference}
              id={id} 
              placeholder={placeholder}
              onInput={dateMaskHandler}
            />
          </div>
        )
      }
      {
        id !== "birth-date" && (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <InputForm
              type={type} 
              ref={reference}
              id={id} 
              placeholder={placeholder}
            />
          </div>
        )
      }
    </React.Fragment>
  );
}

export default FieldComponent
