
const Produto = ({nome, propriedades}) => {
  return (
    <div style={{border: "1px solid black", margin: '1rem ', padding: '10px', width: '200px'}}> 
        <p> {nome}</p>
        <ul>    
            {propriedades.map((propriedade) => <li>{propriedade}</li>)}
        </ul>
    </div>
  )
}

export default Produto
