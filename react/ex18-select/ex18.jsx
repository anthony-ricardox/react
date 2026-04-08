import React from 'react'

const ex18 = () => {
  const [select, Setselect] = React.useState('')

  return <form >
    <select id='produtos' value={select} onChange={({target}) => Setselect(target.value)}>
    <option disabled value="">Selecione</option>
    <option value="Notebook">Notebook</option>
    <option value="Smartphone">Smartphone</option>
    <option value="Tablet">Tablet</option>
    </select>
    {select}
  </form>
    
  
}

export default ex18
