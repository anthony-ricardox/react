import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  function handleClick(){   
    console.log('Faz o login')
    navigate('/sobre')
  }

  return (
    <button onClick={handleClick}>Login</button>
  )
}

export default Login
