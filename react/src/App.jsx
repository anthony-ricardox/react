import { useState } from 'react'
import Header from '../desafio/d02/Header'
import Home from '../desafio/d02/Home'
import Produtos from '../desafio/d02/Produtos'

function App() {
  const { pathname } = window.location;
  let Pagina;

  if(pathname === '/Produto') { 
    Pagina = Produtos
  }else{  
    Pagina = Home
  }

  return (
    <section>
      <Header/>
      <Pagina/>
    </section>
  )
   
  
}

export default App
