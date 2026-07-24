import { useState } from "react";
import "./App.css";
import DoubleNumber from "./components/DoubleNumber";
import SquareNumber from "./components/SquareNumber";
import DarkModeButton from "./atividade/DarkMode/DarkModeButton";
import SwitchThemeButton from "./atividade/SwitchThemeButton";
import Button from "./atividade/Button";

function App() {
  const handleCLickHours = () => {  
    let agora = new Date()
    const hora = agora.getHours()
    const minutos = agora.getMinutes()
    const datahora = document.getElementById('#res')
    alert(`Ja são ${hora}:${minutos}`)
  }

  return (
    <>
      <h1> Hellow Word</h1>
      <SwitchThemeButton theme="light"> ☀️</SwitchThemeButton>
      <SwitchThemeButton theme="dark"> 🌙</SwitchThemeButton>
      <Button onClick={handleCLickHours}> ⏱️ Que horas são? </Button>
      <p id="res"></p>
    </>
  );
}

export default App;
