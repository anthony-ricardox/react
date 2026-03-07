import React from 'react'

const titulo = <h1>Esse é um Titulo</h1>
const styleP = {  
    color: 'green',
}

const App = () => {
  const random = Math.random() 
  const ativo = false
  return (
  <>
    {titulo}
    <p style={styleP}> {new Date().getFullYear() }</p>
  <p className={ativo ? 'Ativo' : 'Inativo'}>{random * 1}</p>
  </>)
}
    

export default App
