import React from 'react'

const ex14 = () => {
    const [contar, setContar] = React.useState(0)

    const valor = React.useMemo(() => {const localItem = window.localStorage.getItem('Produto')
      console.log('Aconteceu o Memo')  
      return localItem 
     
    }, [])
    console.log(valor)

  return (
    <button onClick={() => setContar(contar +1)}>{contar} </button>
  )
}

export default ex14
