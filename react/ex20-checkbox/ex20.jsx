import { Target } from 'lucide-react'
import React from 'react'

const ex20 = () => {
  const [cores, setCores] = React.useState(['Azul'])
  function handleChange({target}){  
    if(target.checked){ 
        setCores([...cores, target.value])
    }else{
        setCores(cores.filter((cor) => { cor  !== target.value}))
        
    }
    
  }

  return (
    <form action="">
        <label >
            <input type="checkbox" value='Azul' checked={cores.includes('Azul')} onChange={handleChange} />
            Azul
        </label>

         <label >
            <input type="checkbox" value='Verde' checked={cores.includes('Verde')} onChange={handleChange} />
            Verde
        </label>
    </form>
  )
}

export default ex20
