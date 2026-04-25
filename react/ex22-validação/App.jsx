import React from "react";
import Input from "../ex21-input-component/Form/Input";

const App = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null)

  function validatecep(value){   
    if(value.length === 0){ 
        setError('Prencha um valor')
        return false
    }else if( !/^\d{5}-?\d{3}$/.test((value))){
        setError('Preencha um CEP válido')
        return false
    }else{
        setError(null)
        return true
    }
  }

  function handleBlur({ target }) {
   // const regex = /^\d{5}-?\d{3}$/;
    //const validacao = regex.test(target.value);
    
    validatecep(target.value)
  }

  function handleChange({target}){  
    if(error) validatecep(target.value)
    setCep(target.value)
  }

  function handleSubmit(event){  
    event.preventDefault()
    if(validatecep(cep)){   
        console.log('Enviou')
    }else{  
        console.log('Não Enviou')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Cep"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}

      <p>
        <button>Enviar</button>
        </p>
    </form>
  );
};

export default App;
