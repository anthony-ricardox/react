import { useState } from 'react'
import './App.css'
import DoubleNumber from './components/DoubleNumber'
import SquareNumber from './components/SquareNumber'

function App() {
  

  return (
    <>
     <h1> Pure Components: React</h1>
     <DoubleNumber number={2}/>
     <DoubleNumber number={5}/>
     <DoubleNumber number={10}/>
     <SquareNumber number={2}/>
     <SquareNumber number={5}/>
     <SquareNumber number={10}/>
    </>
  )
}

export default App
