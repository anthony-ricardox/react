import React from "react";
import Input from "../ex21-input-component/Form/Input";
import useForm from "./Hooks/useForm";

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm()
  const sobrenome = useForm(false)

 
  function handleSubmit(event){  
    event.preventDefault()
    if(cep.Validate() && email.Validate() && nome.Validate()){   
        console.log('Enviou')
    }else{  
        console.log('Não Enviou')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
       <Input
        label="Nome"
        id="nome"
        type="text"
        placeholder="seu nome"
        {...nome}
      />

       <Input
        label="Sobrenome"
        id="sobrenome"
        type="text"
        
        {...sobrenome}
      />

      <Input
        label="Cep"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />

      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="seu@email"
        {...email}
      />
     

      <p>
        <button>Enviar</button>
        </p>
    </form>
  );
};

export default App;
