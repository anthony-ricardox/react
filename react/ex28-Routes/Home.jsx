import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.module.css'
const Home = () => {
  return (
    <div>
       <h1>Home </h1>
        <p>Essa é a Home</p>
        <NavLink to='produto/notebook'>Notebook</NavLink>   {''}
        <NavLink to='produto/smartphone'>Smartphone</NavLink>

    </div>
  )
}

export default Home
