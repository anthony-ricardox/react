
import './App.css'
import Item from './items/Item'

function App() {


  return (
    <>
      <div className="list">
        <h1>Itens para colocar na mala</h1>
        <Item name='Meias' check/>
        <Item name='Geladeira'/>
        <Item name='Cama'/>
        <Item name='Roupas' check/>

      </div>
    </>
  )
}

export default App
