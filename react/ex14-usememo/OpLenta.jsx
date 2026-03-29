import React from 'react'

const OpLenta = () => {
    function OpLenta(){ 
       let c;
       for( let i = 0; i < 10000000; i++){    
        c = i + i /10
       }
       return c
    }

    const [contar , Setcontar] = React.useState(0)
    
    const t1 = performance.now()
    const valor = React.useMemo( () => OpLenta(), []) 
    console.log(valor)
    console.log(performance.now() - t1 )

  return (
    <button onClick={ () => Setcontar( contar + 1)}>{contar} </button>
  )
}

export default OpLenta
