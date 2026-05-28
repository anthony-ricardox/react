import React from 'react'

const App = () => {
    const [dados, setDados] = React.useState()
    const [error,setError] = React.useState(null)

    React.useEffect(()=>{
        async function buscar() {
            let url = 'https://viacep.com.br/ws/01001000/json/'
            try {
                const response = await fetch(url)
                if (!response.ok) throw new Error('CEP não encontrado')
                const cep = await response.json()
                setDados(cep)
            } catch (error){
                console.error(error)
            }
           
        }
        buscar()
    }, [])
  return (
    <>
     {dados && (
        <div>
            <h2>{dados.cep}</h2>
            <p>{dados.logradouro}</p>
            <p>{dados.localidade}, {dados.uf}</p>
            <p>{dados.complemento}</p>
            <p>{dados.estado}</p>
        </div>
     )}
    </>
  )
}

export default App
