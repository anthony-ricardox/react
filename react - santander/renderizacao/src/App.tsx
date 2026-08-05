import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Item from './items/Item'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="list">
        <h1>Itens para colocar na mala</h1>
        <Item name='Meias'/>
        <Item name='Geladeira'/>
        <Item name='Cama'/>
        <Item name='Roupas'/>

      </div>
    </>
  )
}

export default App
