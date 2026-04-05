import React from "react";

const forfild = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },

  {
    id: "email",
    label: "Email",
    type: "email",
  },

  {
    id: "senha",
    label: "Senha",
    type: "password",
  },

  {
    id: "cep",
    label: "Cep",
    type: "text",
  },

  {
    id: "rua",
    label: "Rua",
    type: "text",
  },

  {
    id: "numero",
    label: "Numero",
    type: "text",
  },

  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },

  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },

  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

const ex16 = () => {

  const [form, Setform] = React.useState(forfild.reduce((acc, fild) => {
    return {...acc, [fild.id]: ''}
}, {}));

  const [response, Setresponse] = React.useState(null);
  
  function handleChange({ target }) {
    const { id, value } = target;
    Setform({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    }).then((response) => {
       Setresponse(response) })
  }
 
  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      {forfild.map(({id, label, type}) => ( <div key={id}>
        <label htmlFor={id}> {label} </label>
        <input type={type} id={id} value={form[id]} onChange={handleChange}/>
      </div>))}

      {response && response.ok && alert('Formulario Enviado')}
      <button>Enviar</button>
    </form>
  );
};

export default ex16;
