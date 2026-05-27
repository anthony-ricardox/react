import React from "react";

const App = () => {
  const [personagens, setPersonagens] = React.useState([]);

  React.useEffect(() => {
    async function carregar() {
      let url = "https://rickandmortyapi.com/api/character";
      let todos = [];
      while (url) {
        const response = await fetch(url);
        const dados = await response.json();
        todos = [...todos, ...dados.results];
        url = dados.info.next;
      }
      setPersonagens(todos);
    }
    carregar();
  }, []);
  return (
    <>
      {personagens.map((personagem) => <div key={personagem.id}>
        <h2 style={{fontFamily: 'monospace', color: personagem.status === "Dead" ? "red" :"grey" }}>{personagem.name}</h2>
        <img src={personagem.image} alt={personagem.name} />
        <p style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'arial', color: personagem.status === "Dead" ? "red" : "green"}}>{personagem.status}</p>
      </div>)}
    </>
  );
};

export default App;
