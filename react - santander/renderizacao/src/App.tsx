import "./App.css";
import Item from "./items/Item";

function App() {
  const itemsList = [
    { id: "meias", name: "Meias", check: true },
    { id: "escova-de-dente", name: "Escova de dente", check: false },
    { id: "carregador-celular", name: "Carregador de celular", check: false },
    { id: "pasta-de-dente", name: "Pasta de dente", check: true },
  ];

  return (
    <>
      <div className="list">
        <h1>Itens para colocar na mala</h1>
        {itemsList.map((item) => {
          if(item.check){ 
            return null;
          }
          
          return <Item name={item.name} check={item.check} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default App;
