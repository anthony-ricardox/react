import React from 'react'

const ex15 = () => {
  const [nome, Setnome] = React.useState('')
  const [email , Setemail] = React.useState('')

  function handleSubmit(){  
    console.log(Event)
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>

        <input type="text" value={nome}
        id='nome'
        name="nome"
         onChange={(event) => Setnome(event.target.value)}/>
        
        <input type="email" value={email}
        id='email'
        name="email"
         onChange={(event) => Setemail(event.target.value)}/>
        <button>Enviar</button>
    </form>

  )
}

export default ex15
