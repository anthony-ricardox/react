import React from 'react'

const useCallback = () => {
    const [contar, Setcontar] = React.useState(0)

    const handleClick = React.useCallback( () => Setcontar( (contar) => contar + 1), [])
   
  return (
    <button onClick={handleClick}>{contar}</button>
  )
}

export default useCallback
