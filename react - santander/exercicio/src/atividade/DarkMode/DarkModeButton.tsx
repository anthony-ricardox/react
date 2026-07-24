import React from 'react'
import './DarkMode.module.css'

const DarkModeButton = () => {
  function handleClick(){ 
    alert('Dark Mode')
  }
  return (
    <button className='btn' onClick={handleClick}> 🌙</button>
  )
}

export default DarkModeButton
