import React from 'react'

const FieldComponent = (props) => {

  const dateMaskHandler = (e) => {
    let v = e.target.value.replace(/\D/g, "");

    v = v.replace(/(\d{2})(\d)/, "$1/$2");

    v = v.replace(/(\d{2})(\d)/, "$1/$2");

    e.target.value = v;
  };

  return (
    props.inputs.map((item) => {
      if(item.id === "birth-date"){
        return (
          <div key={item.id}>
            <label htmlFor={item.id}>{item.label}</label>
            <input 
              type={item.type} 
              id={item.id} 
              placeholder={item.placeholder}
              onInput={dateMaskHandler}
            />
          </div>
        )
      }
      return (
        <div key={item.id}>
          <label htmlFor={item.id}>{item.label}</label>
          <input 
            type={item.type} 
            id={item.id} 
            placeholder={item.placeholder}
          />
        </div>
      );
    })
  );
}

export default FieldComponent
