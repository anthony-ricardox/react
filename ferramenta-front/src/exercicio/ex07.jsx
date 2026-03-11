const produtos = [
    {
        id: 1,
        nome: 'Tablet',
        preco: 'R$ 2000',
        cores: ['#29d8d5', ' #252a34','#fc3766' ],

    },
    {
        id: 2,
        nome: 'Smartphone',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#f5f5a8', '#4d54af'],
    },
    {
        id: 3,
        nome: 'Geladeira',
        preco: 'R$ 1500',
        cores: ['#ff0548', '#ad4545', '#ac877f']
    }
]



const Ex07 = () => {
    const dados = produtos.filter(
  ({ preco }) => Number(preco.replace("R$ ", "")) > 1500)
    console.log(dados)
  return <section>  
    {dados.map( ({nome,id,preco,cores}) => <div key={id}> 
        <h1>{nome}</h1>

        <p>Preço: {preco}</p>

        <ul>Cores: {cores.map( (cor) => <li style={{backgroundColor: cor, color: 'black'}} key={cores}> {cor}</li>)}</ul>
        
    </div>)}
  </section>
};

export default Ex07;