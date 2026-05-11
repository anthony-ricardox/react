import React from "react";
import Radio from "./Radio";
import "./App.module.css";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [resposta, setResposta] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  const [slide, setSlide] = React.useState(0);
  const [res, setRes] = React.useState(null);

  function handleChange({ target }) {
    setResposta({...resposta, [target.id]: target.value})
  }

  function resultado(){ 
    console.log('Final')

    const corretas = perguntas.filter((item) => {
    return resposta[item.id] === item.resposta;
  });
  setRes(` Você acertou: ${corretas.length} de ${perguntas.length}`)
  console.log(corretas);
  }

  function handleClick(){
    if(slide < perguntas.length - 1){   
        setSlide(slide + 1)
    }else{  
        setSlide(slide + 1)
        resultado()
    }
    
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
            active={slide === index}
            key={pergunta.id}
            value={resposta[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
        />
      ))}
       {res  ? <p style={({color: 'green', fontWeight: 'bold'})}> {res}</p> :<button onClick={handleClick}> Proximo </button> }
      
    </form>
  );
};

export default App;
