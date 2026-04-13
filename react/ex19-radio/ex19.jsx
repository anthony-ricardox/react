import React from 'react'

const ex19 = () => {
    const [cor, Setcor] = React.useState('')
    const [produto, Setproduto] = React.useState('')
    function handleChange({target}){    
       Setproduto(target.value) 
    }

  return (
   
    <form action=""> 
        <p>{cor}</p>
        <h2>Cor</h2>
        
        <label >
        
        <input type="radio"  onChange={({target}) => Setcor(target.value)} value={'Azul'} checked={cor === 'Azul'}/>
        Azul
    </label>

        <label >
        
        <input type="radio"  onChange={({target}) => Setcor(target.value)} value={'Verde'} checked={cor === 'Verde'}/>
        Verde
    </label>

    <h2>Produto</h2>
    <p>{produto}</p>
     <label >
       
        <input type="radio"  onChange={handleChange} value={'Notebook'} checked={produto === 'notebook'}/>
         Notebook
    </label>

     <label >
       
        <input type="radio"  onChange={handleChange} value={'Tablet'} checked={produto === 'Tablet'}/>
         Tablet
    </label>
    </form>
    

    
  )
}

export default ex19
