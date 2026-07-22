import "../App.css";
interface StepProps {
  step: number;
  instrunction: string;
}

const stepsInstructions = [
  "Criar função do componente",
  "Exportar e importar a função  criada",
  "Finalizar a estrutura do componente",
  "Adicionar interações",
  "Sempre praticar"
];

function Step({ step, instrunction }: StepProps) {
  return (
    <li>
      Passo {step}: {instrunction}
      
    </li>
  );
}

function App() {
  const steps = [];
  for(let i = 1; i <= stepsInstructions.length; i++){  
    steps.push(<Step key={i} step={i}  instrunction={stepsInstructions[i-1]}/>)
  }
  return (
    <>
      <h1> Estrutura de um componente </h1>
      <ul>
        {steps}
      </ul>
    </>
  );
}

export default App;
