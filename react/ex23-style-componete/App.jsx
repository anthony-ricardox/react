import React from "react";
import styled from "styled-components";

const ProdutosContainer = styled.div`
  display: flex;
`;
const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: aqua;
`;
const Paragrafo = styled.p`
  color: green;
`;
const Preco = styled.p`
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`;
const Comprar = styled.button`
  background-color: ${({ativo}) => (ativo ? 'green' : 'aqua')};
  color: ${({ativo}) => (ativo ? 'white' : 'black')};
  padding: 5px;
  border: 1px solid black;
  border-radius: 8px;
`;
const App = () => {
  const [ativo, setAtivo] = React.useState(false)
  function handleClick(){
    setAtivo(!ativo)
  }

  return (
    <div>
      <ProdutosContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Paragrafos</Paragrafo>
          <Preco cor="blue">R$ 1000</Preco>
        </Produto>
        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>Paragrafos</Paragrafo>
          <Preco cor="green">R$ 1000</Preco>
        </Produto>
      </ProdutosContainer>
      <Comprar ativo={ativo} onClick={handleClick} >Comprar</Comprar>
    </div>
  );
};

export default App;
