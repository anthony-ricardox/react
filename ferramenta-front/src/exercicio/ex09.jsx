
const Titulo = ({cor, text, children}) =>{  
    return (    
        <h1 style={{color: cor}}>{text} {children}</h1>
    )
}

const Ex09 = () =>{    
    return (    
        <div>
            <Titulo  text="Meu Site" cor="red">
                Childrean
            </Titulo>,
            <Titulo  text="Meu Site 2" cor="blue"/>
        </div>

    )
}



export default Ex09


