import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <div>   
       <form >
         <p> <Input id="email" label="Email" required/> </p>
         <p> <Input id="senha" type="password" label="Senha"/> </p>
         <Button/>
        </form>
    </div>
  )
}

export default Form
