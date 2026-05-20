import React from 'react'
import foto from './img/img-cadastro.jpg'
import './App.css'
import CoracaoSvg from './CoracaoSvg'






const App = () => {
    const [Tam, setTam] = React.useState(0)

    function handleClick(){ 
        for(let i = 0 ; i < 200;  i++){
            setTimeout(() => {
                setTam(i)
            }, 100 * i)
        }
}

  return (
    <div>
        <p className="fundo" onClick={handleClick}></p>
        <CoracaoSvg color='red' width={Tam}/>
       <img src={foto} alt="cadastro" />
    </div>
  )
}

export default App
