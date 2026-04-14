
import React from 'react'


const ex20 = () => {
  const arraycor = ["Azul","Azul", "Verde","Roxo", "Vermelhor", "Preto"]

  const [cores, setCores] = React.useState(['Azul'])
  function handleChange({target}){  
    if(target.checked){ 
        setCores([...cores, target.value])
    }else{
        setCores(cores.filter((cor) => {cor !== target.value}))
        
    }
    
  }

  return (
    <form action="">
      {arraycor.map((cor, index) => <label key={ index}>
           <input type="checkbox" value={cor + index} checked={cores.includes(cor + index )} onChange={handleChange} />
          {cor}
      </label>)}

       
    </form>
  )
}

export default ex20
