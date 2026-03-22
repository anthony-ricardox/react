import React from 'react'

const Ex11 = () => {
    const [ativo, setAtivo] = React.useState(true)
    const [dados, setDados] = React.useState({nome: 'Anthony', idade: '20'})


    function handleClick(){ 
       setAtivo(!ativo)
       setDados({...dados, faculdade: 'Posuui Faculdade'})
    }

  return (
    <div>
       <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <p>{dados.faculdade} </p>
      <button onClick={handleClick}>{ativo? 'Ativo' : 'Inativo'}</button>
    </div>
  );
};

export default Ex11;