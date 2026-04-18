import React from "react";
import Input from "./Form/Input";

import "../public/style.css";
import Select from "./Form/Select";
import Radio from "./Form/Radio";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [fruta, setFruta] = React.useState("");

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
       <Radio options={["Laranja", "Uva", "Melão"]} value={fruta} setValue={setFruta} />
    </form>
  );
};

export default App;
