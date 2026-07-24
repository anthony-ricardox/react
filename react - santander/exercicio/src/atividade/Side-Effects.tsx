import "../App.css";
interface StepProps {
  step: number;
  instrunction: string;
}



function Step({step,  instrunction }: StepProps) {
  return <li>Passo {step}: {instrunction}</li>;
}


    
function App() {
  return (
    <>
      <h1> Estrutura de um componente </h1>
      <ul>
        <Step step={1} instrunction="Criar função do componente" />
        <Step step={2} instrunction="Exportar e importar a função  criada" />
        <Step  step={3} instrunction="Finalizar a estrutura do componente" />
        <Step step={4} instrunction="Adicionar interações" />
      </ul>
    </>
  );
}

export default App;
