import React from "react";

const Form = () => {
  const [form, Setform] = React.useState({
    nome: '',
    email: ''
  })
  function handleonChange({target}){    
    const {id, value} = target
    console.log(id, value)
    Setform({...form,[id]: value})
  }

  function handleSubmit() {
    console.log(Event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p> <label htmlFor="nome">Nome</label> </p>

      <input
        type="text"
        value={form.nome}
        id="nome"
        name="nome"
        onChange={handleonChange}
      />
       {form.nome} 
      <p> <label htmlFor="email">Email</label> </p>
      <input
        type="email"
        value={form.email}
        id="email"
        name="email"
        onChange={handleonChange}
      />
      
      <button>Enviar</button>
    </form>
  );
};

export default Form;
