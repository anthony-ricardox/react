import React from "react";

const types = {
    cep: {
        regex : /^\d{5}-?\d{3}$/,
        messege: 'Cep inválido'
    },
    email: {    
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        messege: 'Email inválido'
    }
}

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null)
  
  function Validate(value){  
    if(type === false) return true

     if(value.length === 0){ 
        setError('Prencha um valor')
        return false
    }else if(types[type] && !types[type].regex.test(value)){
        setError(types[type].messege)
        return false
    }else{
        setError(null)
        return true
    }
  }

  function onChange({target}){  
    if(error) Validate(target.value)
    setValue(target.value)
  }


  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => Validate(value),
    Validate: () => Validate(value)
  };
};

export default useForm;
