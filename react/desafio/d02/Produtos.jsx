import React from 'react'
 import Titulo from './Titulo'
 import Produto from './Produto'

const Produtos = () => {
  const produtos = [    
    {nome: 'Notbook', propriedades: ['16 ram', '512gb']},
    {nome: 'Smartphone', propriedades: ['4 ram ', '128gb']}
  ]

  return (
    <section>   
        <Titulo texto="Produtos"/>
        {produtos.map((produto) => <Produto key={produto.nome} {...produto}/>)}
    </section>
  )
}

export default Produtos
