import React from "react";
import Input from "./Form/Input";

import "../public/style.css";
import Select from "./Form/Select";
import Radio from "./Form/Radio";
import Chekbox from "./Form/Chekbox";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [fruta, setFruta] = React.useState("");
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([])
  if(termos.length > 0 ){ 
    console.log('Enviado')
  }

  return (
    <form action="">
      <Select
        options={["Smartphone", "Tablet azul "]}
        value={produto}
        setValue={setProduto}
      />
      <Input
        id="nome"
        label={"Nome"}
        value={nome}
        setValue={setNome}
        required
      />
      <Input
        id="email"
        label={"Email"}
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
      <h2>Cores</h2>
      <Radio options={["Azul", "Verde"]} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={["Laranja", "Uva", "Melão"]}
        value={fruta}
        setValue={setFruta}
      />

      <h2>Termos</h2>
      <Chekbox
        options={["Li e aceito os Termos"]}
        value={termos}
        setValue={setTermos}
      />

      <h2>Checkbox</h2>
      <Chekbox
        options={["JavaScript", "PHP", "Ruby"]}
        value={linguagens}
        setValue={setLinguagens}
      />
    </form>
  );
};

export default App;
