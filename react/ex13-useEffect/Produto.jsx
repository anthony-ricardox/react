import React from 'react'

const Produto = () => {
   React.useEffect(() => { 
    function handleScroll(){ 
        console.log(event)
    }
    window,addEventListener('scroll', handleScroll)
    return () => {  
        window.removeEventListener('scroll', handleScroll)
    }
    }, [])

  return (
    <div style={{height:'100vh'}}>
      <p>Meu produto</p>
    </div>
  )
}

export default Produto
